
CREATE SEQUENCE public.categorys_id_seq;

CREATE TABLE public.categorys (
                id INTEGER NOT NULL DEFAULT nextval('public.categorys_id_seq'),
                category_name VARCHAR NOT NULL,
                CONSTRAINT categorys_pk PRIMARY KEY (id)
);


ALTER SEQUENCE public.categorys_id_seq OWNED BY public.categorys.id;

CREATE TABLE public.names (
                id VARCHAR NOT NULL,
                primary_name VARCHAR NOT NULL,
                birth_year_name INTEGER NOT NULL,
                death_year_name INTEGER,
                CONSTRAINT names_pk PRIMARY KEY (id)
);


CREATE TABLE public.professions (
                id VARCHAR NOT NULL,
                profession_name VARCHAR NOT NULL,
                CONSTRAINT professions_pk PRIMARY KEY (id)
);


CREATE TABLE public.titles (
                id VARCHAR NOT NULL,
                category_id INTEGER NOT NULL,
                original_title VARCHAR,
                adult_title BOOLEAN DEFAULT false NOT NULL,
                start_year_title INTEGER,
                end_year_title INTEGER,
                primary_title VARCHAR NOT NULL,
                runtime_minutes_title INTEGER,
                average_rating_title DOUBLE PRECISION,
                num_votes_title INTEGER,
                CONSTRAINT titles_pk PRIMARY KEY (id)
);


CREATE SEQUENCE public.genres_id_seq;

CREATE TABLE public.genres (
                id INTEGER NOT NULL DEFAULT nextval('public.genres_id_seq'),
                genre_name VARCHAR NOT NULL,
                title_id VARCHAR NOT NULL,
                CONSTRAINT genres_pk PRIMARY KEY (id)
);


ALTER SEQUENCE public.genres_id_seq OWNED BY public.genres.id;

CREATE SEQUENCE public.title_name_map_id_seq;

CREATE TABLE public.title_name_map (
                id INTEGER NOT NULL DEFAULT nextval('public.title_name_map_id_seq'),
                name_id VARCHAR NOT NULL,
                title_id VARCHAR NOT NULL,
                CONSTRAINT title_name_map_pk PRIMARY KEY (id)
);


ALTER SEQUENCE public.title_name_map_id_seq OWNED BY public.title_name_map.id;

ALTER TABLE public.titles ADD CONSTRAINT category_title_fk
FOREIGN KEY (category_id)
REFERENCES public.categorys (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.title_name_map ADD CONSTRAINT name_title_name_map_fk
FOREIGN KEY (name_id)
REFERENCES public.names (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.professions ADD CONSTRAINT name_professions_fk
FOREIGN KEY (id)
REFERENCES public.names (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.title_name_map ADD CONSTRAINT title_title_name_map_fk
FOREIGN KEY (title_id)
REFERENCES public.titles (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.genres ADD CONSTRAINT title_genres_fk
FOREIGN KEY (title_id)
REFERENCES public.titles (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;
