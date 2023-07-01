# DER o MER (Diagrama entidad relación)
### Es un modelo previo (gráfico) que no ayuda a definir cual será la estructura de nuestra base de datos
### Cuales serán nuestras tablas (entidades) y sus relaciones

```
Users
 id  |  name  | password |  email   |
-----+--------+----------+----------+
   1 | orli   | aa       |  @g      |
   2 | gina   | bb       |  @d      |
   3 | fabi   | cc       |  @f      |
   4 | luca   | dd       |  @h      |

 
 Characters
 id  |  name        | image    |gender_id  | specie_id  |
-----+--------------+----------+-----------+------------+
   1 | Rick Sanchez | aa       |    1      |    2       |
   2 | Morty Smith  | bb       |    1      |    1       |
   3 | Summer Smith | cc       |    2      |    1       |
   4 | Beth Smith   | dd       |    2      |    1       |

   
   UserCharacter <-tabla intermedia->
solo tiene FK        FK      
 id  |  user_id  | char_id  | 
-----+-----------+----------+
   1 |   1       |  1       | 
   2 |   1       |  2       | 
   3 |   1       |  4       | 
   4 |   3       |  2       | 

Favorites
          FK (de la tabla intermedia)
 id  |  userChar_id  | 
-----+---------------+
   1 |      2        | 
   2 |               | 
   3 |               | 
  

Gender
 id  |  name  | 
-----+--------+
   1 | male   |
   2 | female | 
   3 | unknowk| 
   4 | otro   |


Species
 id  |  name  | 
-----+--------+
   1 | Human  | 
   2 | Alien  | 
   3 | Dede   | 
   4 | Fufu   | 

```

### Para ingresar desde otra consola usar el comando:
```bash
psql -U postgres
```