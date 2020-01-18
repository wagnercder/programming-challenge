# Sidia Challenge

## Detalhe das escolhas durante o desenvolvimento

O projeto foi desenvolvido a partir da utilização das seguintes tecnologias:
    * Node.js (APi)
    * Bookshelf.js (APi)
    * PostgreSql (Base de Dados)
    * Python (Python)

    Para a Api
    - A escolha de Node se deu devido ao costume com o uso no dia a dia, seja para criação de serviços
    ou para o desenvolvimento de Apis. Bookshelf foi então a melhor escolha para integração, aprendi
    recentemente então acabou sendo uma boa oportunidade para uso no presente problema. E supondo que esta
    fosse uma aplicação real, como a escrita utilizando ORM é menor desde que as models estejam corretamente 
    definidas é possível atingir um nível de produtividade maior.
    
    Para o Banco de Dados
    - A escolha do PostgreSql se deu a partir do contato no dia dia com o mesmo, e em processos similares
    de migração de base que participei, ele não apresenta qualquer tipo de problema.
    
    Para o script de inserção
    - A escolha de Python inicialmente se deu por conta da possibilidades de haver situações durante 
    a migração que necessitassem do uso de Regex (não ocorreu). Apesar de não ser tão habituado ao 
    desenvolvimento com Python, considero a criação de um script simples como o proposto, mais fácil 
    de ser escrito utilizando Python em comparação com Java por exemplo.       

## Passos para execução

    1 - O sql para construção da base de dados Postgre pode ser encontrado em 
            db-model/sql/create_database_v1.sql

    2 - O script para inserção dos dados encontra-se em 
            dataset/extract_data.py
    
    3 - No diretório api/ utilizar o seguinte comando
            npm install
    
    4 - Iniciar o servidor
            node app.js
    
    5 - A visualização dos dados pode ser encontrado no endereço
            http://localhost:4000/
    

## Rotas disponíveis:
    - A seguinte rota pode ser utilizada tanto para apresentar todos os dados, como para listar o top 10
    
    POST: /title  
    {
        "data": [
            {
                "id": "tt0365691",
                "category_id": 1,
                "original_title": "Roadkill",
                "adult_title": false,
                "start_year_title": 2003,
                "end_year_title": null,
                "primary_title": "Roadkill",
                "runtime_minutes_title": 5,
                "average_rating_title": 6.9,
                "num_votes_title": 105,
                "categories": {
                    "id": 1,
                    "category_name": "short"
                }
            }
        ]
    }

    - A seguinte rota carrega as categorias que foram identificadas durante a inserção
    
    GET: /categories
    [
        {
            "id": 1,
            "category_name": "short"
        },
        {
            "id": 2,
            "category_name": "movie"
        },
        {
            "id": 3,
            "category_name": "tvMovie"
        },
        {
            "id": 4,
            "category_name": "tvSeries"
        },
        {
            "id": 5,
            "category_name": "tvEpisode"
        },
        {
            "id": 6,
            "category_name": "tvShort"
        },
        {
            "id": 7,
            "category_name": "tvMiniSeries"
        },
        {
            "id": 8,
            "category_name": "tvSpecial"
        },
        {
            "id": 9,
            "category_name": "video"
        },
        {
            "id": 10,
            "category_name": "videoGame"
        }
    ]
