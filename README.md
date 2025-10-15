# Termék Kezelő API Dokumentáció

## Projekt Áttekintés

Ez egy egyszerű REST API alkalmazás, amely termékek kezelését teszi lehetővé. Az alkalmazás jelenleg alapvető GET végpontokat biztosít termékek lekérdezéséhez, listázásához és szűréséhez. A projekt kiváló alapot nyújt további fejlesztésekhez, mint például:

- Termékek létrehozása, módosítása és törlése (POST, PUT, DELETE végpontok)
- Adatbázis integráció (pl. MongoDB vagy MySQL)
- Termék kategóriák és címkék kezelése
- Keresési és rendezési funkciók implementálása

## Telepítési Útmutató

### Előfeltételek

1. Node.js telepítése:
   - Látogass el a [Node.js hivatalos oldalára](https://nodejs.org/)
   - Ellenőrizd a telepítést a következő parancsokkal:
     ```
     node --version
     npm --version
     ```

### Projekt Telepítése

1. Klónozd vagy töltsd le a projektet

2. Navigálj a projekt mappájába:
   ```
   cd server-app
   ```

3. Függőségek telepítése:
   ```
   npm install
   ```

## Szerver Indítása

A szerver elindításához használd a következő parancsot:
```
node server.js
```

A szerver alapértelmezetten a 3000-es porton fut: `http://localhost:3000`

## API Végpontok

### 1. Főoldal

- **URL:** `/`
- **Metódus:** GET
- **Válasz példa:**
  ```json
  {
    "message": "Üdvözöl a szerver!"
  }
  ```

### 2. Termékek Listázása

- **URL:** `/products`
- **Metódus:** GET
- **Válasz példa:**
  ```json
  [
    {
      "id": 1,
      "name": "Laptop",
      "price": 299999
    },
    {
      "id": 2,
      "name": "Mobiltelefon",
      "price": 159999
    },
    {
      "id": 3,
      "name": "Tablet",
      "price": 89999
    }
  ]
  ```

### 3. Egyedi Termék Lekérése

- **URL:** `/products/:id`
- **Metódus:** GET
- **Paraméterek:** 
  - `id`: A termék azonosítója
- **Válasz példa:**
  ```json
  {
    "id": 1,
    "name": "Termék 1",
    "price": 45999
  }
  ```

### 4. Termékek Szűrése Ár Alapján

- **URL:** `/products/filter/price`
- **Metódus:** GET
- **Query paraméterek:**
  - `min`: Minimum ár (opcionális)
  - `max`: Maximum ár (opcionális)
- **Példa URL:** `/products/filter/price?min=100000&max=200000`
- **Válasz példa:**
  ```json
  [
    {
      "id": 2,
      "name": "Mobiltelefon",
      "price": 159999
    }
  ]
  ```

## Tesztelés

Az API végpontok teszteléséhez használhatod a Postman alkalmazást:

1. Töltsd le és telepítsd a [Postman](https://www.postman.com/downloads/) alkalmazást
2. Indítsd el a szervert
3. Hozz létre új GET kéréseket a fent leírt végpontokra
4. A válaszokat JSON formátumban fogod megkapni