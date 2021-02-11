# Bem vindo ao repositório do Desafio TakeBlip!

Aqui voce encontra detalhes da API que foi desenvolvida para o correto funcionamento do chatBot

*Nome do bot na plataforma da blip -> Desafio_Carrousel_Leonardo_C_D
*Id do bot na plataforma da blip -> elfbot

[>>>>>>>>>>>>>>> API DESENVOLVIDA - HEROKU <<<<<<<<<<<<<<<<<<<](https://leonardoinatel-challenge.herokuapp.com/repository)

- No `localStorage` do navegador:

  - O valor da chave `items` contém um array de objetos

    ```json
    {
      "itemType": "application/vnd.lime.document-select+json",
      "items": []
    }
    ```

  - O json final da Api terá a seguinte forma:

    ```json
      {
      "itemType": "application/vnd.lime.document-select+json",
      "items": [
        {
          "header": {
            "type": "application/vnd.lime.media-link+json",
            "value": {
              "title": "takenet/Takenet.ScoreSystem",
              "text": "Takenet score system",
              "type": "image/png",
              "uri": "https://avatars.githubusercontent.com/u/4369522?v=4"
            }
          },
          "options": [
            {
              "value": {
                "type": "application/json",
                "value": {
                  "key1": "value0",
                  "key2": 0
                }
              }
            }
          ]
        },
        {
          "header": {
            "type": "application/vnd.lime.media-link+json",
            "value": {
              "title": "takenet/Takenet.Radar",
              "text": "Radar de tecnologias takenet",
              "type": "image/png",
              "uri": "https://avatars.githubusercontent.com/u/4369522?v=4"
            }
          },
          "options": [
            {
              "value": {
                "type": "application/json",
                "value": {
                  "key1": "value1",
                  "key2": 1
                }
              }
            }
          ]
        },
        {
          "header": {
            "type": "application/vnd.lime.media-link+json",
            "value": {
              "title": "takenet/libphonenumber-csharp",
              "text": "Forking original c# port",
              "type": "image/png",
              "uri": "https://avatars.githubusercontent.com/u/4369522?v=4"
            }
          },
          "options": [
            {
              "value": {
                "type": "application/json",
                "value": {
                  "key1": "value2",
                  "key2": 2
                }
              }
            }
          ]
        },
        {
          "header": {
            "type": "application/vnd.lime.media-link+json",
            "value": {
              "title": "takenet/library.logging",
              "text": "Provides a simple logging interface for applications and some basic implementations of this interface",
              "type": "image/png",
              "uri": "https://avatars.githubusercontent.com/u/4369522?v=4"
            }
          },
          "options": [
            {
              "value": {
                "type": "application/json",
                "value": {
                  "key1": "value3",
                  "key2": 3
                }
              }
            }
          ]
        },
        {
          "header": {
            "type": "application/vnd.lime.media-link+json",
            "value": {
              "title": "takenet/library.data",
              "text": "Provides a simple abstraction for implementing the repository and unit of work patterns for data-enabled applications",
              "type": "image/png",
              "uri": "https://avatars.githubusercontent.com/u/4369522?v=4"
            }
          },
          "options": [
            {
              "value": {
                "type": "application/json",
                "value": {
                  "key1": "value4",
                  "key2": 4
                }
              }
            }
          ]
        }
      ]
    }
  ```
  
