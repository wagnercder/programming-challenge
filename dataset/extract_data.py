import os

import csv

import psycopg2

def open_tsv(path):
    with open(path, encoding = "utf8") as tsvfile:
        tsv_file = csv.reader(tsvfile, delimiter = "\t")

        rows = []

        for row in tsv_file:
            rows.append(row)

        return rows[1:]

if __name__ == '__main__':
    print('Openings TSV Files')

    connection = psycopg2.connect(user = "postgres",
        password = "",
        host = "127.0.0.1",
        port = "5432",
        database = "sidia_challenge")

    titles_data = open_tsv(os.getcwd() + '\\title\\data.tsv')
    ratings_data = open_tsv(os.getcwd() + '\\rating\\data.tsv')
    names_data = open_tsv(os.getcwd() + '\\name\\data.tsv')
    