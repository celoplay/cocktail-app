# 🍹 Cocktail App (Angular • Aprendizaje)
[![Angular](https://img.shields.io/badge/Angular-Framework-informational)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-Language-informational)]()
[![Status](https://img.shields.io/badge/Status-Active-brightgreen)]()

Aplicación de ejemplo para **buscar y explorar cócteles** consumiendo una API pública.  
> Proyecto **didáctico** basado en material de curso, con **adaptaciones personales** para reforzar el aprendizaje.

---

## 🚀 Funcionalidades
- Búsqueda de cócteles por **nombre** y/o **ingrediente**
- Listado con **imagen**, **nombre** y **categoría**
- Vista de **detalle**: ingredientes, medidas y preparación
- **Favoritos** (opcional) con `localStorage`
- **Filtros** por categoría / con alcohol (opcional)

---

## 🧰 Tecnologías
- Angular, TypeScript  
- HTML, CSS  
- HttpClient (peticiones a API)  
- Git

---

## 📦 Requisitos
- Node 18+ (recomendado)  
- Angular CLI instalado globalmente:
  ```bash
  npm i -g @angular/cli

## ▶️ Ejecución local
git clone https://github.com/celoplay/cocktail-app<br>
cd cocktail-app<br>
npm install<br>
ng serve<br>
abre http://localhost:4200


## 🔌 API utilizada

TheCocktailDB: https://www.thecocktaildb.com <br>
Endpoints típicos:

- Buscar por nombre: /api/json/v1/1/search.php?s=<nombre>
- Por ingrediente: /api/json/v1/1/filter.php?i=<ingrediente>
- Detalle por ID: /api/json/v1/1/lookup.php?i=<id>

## 🧠 Qué aprendí

- Consumo de API con HttpClient y Observables<br>
- Routing y parámetros (/detail/:id)
- Comunicación entre componentes y estado local
- Manejo de errores y estados de carga
- Organización de un proyecto Angular

## ✨ Cambios personales (ejemplos)

Estilos propios, pipes de formato, favoritos en localStorage, loaders, etc.

## 📝 Nota
Proyecto desarrollado como parte de mi formación en "Aprende Angular desde 0 con 10 proyectos completos" por Disco Duro de Roer  <br>
Curso disponible en: https://www.udemy.com/course/aprende-angular-desde-0-con-10-proyectos-completos/



## 👤 Autor

**Marcelo Aizaga M.** — Valencia, España  
GitHub: https://github.com/celoplay  
LinkedIn: https://www.linkedin.com/in/marcelo-aizaga
