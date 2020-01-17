import os

import csv

import psycopg2

from decimal import Decimal

def open_tsv(path):
    with open(path, encoding = "utf8") as tsvfile:
        tsv_file = csv.reader(tsvfile, delimiter = "\t")

        rows = []

        for row in tsv_file:
            rows.append(row)

        return rows[1:]

def represents_int(s):
    try: 
        int(s)
        return True
    except ValueError:
        return False

def check_n(value):
    return value if(value != "\\N") else None

def check_bool(value):
    return True if(value == 1) else False

def check_for_category(categories, category_name, connection, cursor, last_id):
    if category_name in categories:
        return categories[category_name], last_id, cursor
    else:
        cursor.execute("INSERT INTO categories (id, category_name) VALUES (%s, %s)", (last_id + 1, category_name))
        
        return last_id + 1, last_id + 1, cursor

def insert_genre(title_id, genres, cursor):
    genre_insert_query = """INSERT INTO genres (title_id, genre_name) VALUES (%s, %s)"""
    
    for genre_name in genres:
        genre_to_insert = (title_id, genre_name)
        cursor.execute(genre_insert_query, genre_to_insert)

def insert_title(titles_data, ratings_data, connection, cursor): #insert title and categories
    title_insert_query = """INSERT INTO titles (id, category_id, original_title, primary_title, adult_title, start_year_title, 
            end_year_title, runtime_minutes_title, average_rating_title, num_votes_title) 
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""
    
    ratings = {}
    categories = {}
    category_last_id = 0

    for row in ratings_data:
        ratings[row[0]] = {}
        ratings[row[0]]['average_rating'] = row[1]
        ratings[row[0]]['vote_number'] = row[2]
    
    for line in titles_data:   
        try:     
            categories[line[1]], category_last_id, cursor = check_for_category(categories, line[1], connection, cursor, category_last_id)

            title_to_insert = (line[0], 
                categories[line[1]], 
                check_n(line[2]), 
                check_n(line[3]), 
                check_bool(line[4]), 
                check_n(line[5]), 
                check_n(line[6]), 
                check_n(line[7]),
                Decimal(ratings[line[0]]['average_rating']) if(line[0] in ratings is not None) else None, #--- checking for null relation 
                int(ratings[line[0]]['vote_number']) if(line[0] in ratings is not None) else None) #--- checking for null relation
            
            print(title_to_insert)
            
            if(represents_int(line[7])): 
                cursor.execute(title_insert_query, title_to_insert)
                connection.commit()

                # Insert into genres
                if(check_n(line[8]) != None):
                    insert_genre(line[0], line[8].split(','), cursor)
                
                connection.commit()

        except (IndexError, ValueError) as error :
            print(error)
            continue

if __name__ == '__main__':
    print('Openings TSV Files')

    connection = psycopg2.connect(user = "postgres",
        password = "curitiba123",
        host = "127.0.0.1",
        port = "5432",
        database = "sidia_challenge")

    try:
        cursor = connection.cursor()
        
        titles_data = open_tsv(os.getcwd() + '\\title\\data.tsv')
        ratings_data = open_tsv(os.getcwd() + '\\rating\\data.tsv')

        insert_title(titles_data, ratings_data, connection, cursor)

        # names_data = open_tsv(os.getcwd() + '\\name\\data.tsv')
    
    except (Exception, psycopg2.Error) as error :
        print(error)
        if(connection):
            print("Failed to insert row into title table", error)

    finally:
        #closing database connection.
        if(connection):
            cursor.close()
            connection.close()
            print("PostgreSQL connection is closed")
    