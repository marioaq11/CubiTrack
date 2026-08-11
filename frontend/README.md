<div align="center">

# CubiTrack

### Smart Pallet Cubing & Load Optimization System

Optimize pallet loading. Reduce wasted space. Improve logistics.

![Status](https://img.shields.io/badge/status-In%20Development-orange)
![.NET](https://img.shields.io/badge/.NET-8-blueviolet)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)
![SQL Server](https://img.shields.io/badge/SQL_Server-2022-red)
![License](https://img.shields.io/badge/license-MIT-green)

</div>

---

# Overview

CubiTrack is a full-stack web application designed to optimize pallet loading by simulating how boxes fit on different pallet configurations.

Instead of relying on spreadsheets or manual calculations, users can create simulations, evaluate different box orientations, estimate pallet utilization, and generate logistics reports with just a few clicks.

The project is being developed as a portfolio application following modern software engineering practices, including clean architecture, REST APIs, and responsive web design.

---

# Problem Statement

Many warehouses and logistics operations still perform pallet cubing calculations manually or using spreadsheets.

This approach can lead to:

- Incorrect pallet utilization
- Wasted storage space
- Increased transportation costs
- Human errors
- Slow planning processes

CubiTrack aims to automate these calculations and provide quick, reliable loading simulations.

---

# Planned Features

## Box Management

- Create boxes
- Edit boxes
- Delete boxes
- Search boxes
- Define dimensions and weight

---

## Pallet Management

- Create pallets
- Edit pallets
- Delete pallets
- Support different pallet sizes

---

## Cubing Simulation

- Calculate boxes per layer
- Calculate total layers
- Calculate total pallet height
- Calculate occupied volume
- Calculate remaining volume
- Calculate pallet utilization
- Calculate total shipment weight

---

## Orientation Optimization

Automatically evaluate multiple box orientations and determine the configuration with the highest pallet utilization.

---

## Dashboard

- Recent simulations
- Average pallet utilization
- Most used pallet
- Most used box
- Performance metrics

---

## Reports

- Export to PDF
- Export to Excel

---

## Authentication

- User login
- Role-based authorization
- Secure API using JWT

---

# Architecture

The project follows a modern client-server architecture.

```text
React + TypeScript
        │
        │ REST API
        ▼
ASP.NET Core Web API
        │
Entity Framework Core
        │
SQL Server
```

Backend architecture:

```text
CubiTrack

├── API
├── Application
├── Domain
├── Infrastructure
└── Tests
```

---

# Tech Stack

## Frontend

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Bootstrap

## Backend

- ASP.NET Core Web API
- C#
- Entity Framework Core
- LINQ
- Swagger

## Database

- SQL Server

## Development Tools

- Visual Studio 2022
- Visual Studio Code
- Git
- GitHub

---

# Roadmap

## Phase 1

- [ ] Project setup
- [ ] Database design
- [ ] API development
- [ ] React setup

## Phase 2

- [ ] Box CRUD
- [ ] Pallet CRUD
- [ ] Cubing engine

## Phase 3

- [ ] Dashboard
- [ ] Reports
- [ ] Authentication

## Phase 4

- [ ] Automatic optimization
- [ ] 2D pallet visualization
- [ ] Deployment

---

# Repository Structure

```text
cubitrack/

├── backend/
│   ├── CubiTrack.API
│   ├── CubiTrack.Application
│   ├── CubiTrack.Domain
│   ├── CubiTrack.Infrastructure
│   └── CubiTrack.Tests
│
├── frontend/
│   └── React Application
│
└── README.md
```

---

# Project Goals

This project is intended to demonstrate knowledge in:

- Full Stack Development
- ASP.NET Core Web API
- React
- TypeScript
- SQL Server
- Entity Framework Core
- Clean Architecture
- RESTful API Design
- Authentication & Authorization
- Git & GitHub
- Software Engineering Best Practices

---

# Screenshots

> Coming soon...ssssssssssssssssssss

---

# Future Improvements

- 3D pallet visualization
- Barcode support
- Multiple warehouse management
- Shipping cost estimation
- AI-assisted loading recommendations
- Docker support
- Cloud deployment

---

# Contributing

Contributions, suggestions, and feedback are welcome.

---

# License

This project is licensed under the MIT License.

---

<div align="center">

Made with ❤️ using React & ASP.NET Core

</div>