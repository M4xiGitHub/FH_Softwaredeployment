WordPress Deployment mit Docker

Dieses Projekt zeigt, wie Sie WordPress mit externer MySQL-Datenbank in Containern bereitstellen können. Es besteht aus zwei Teilen:
- Teil 1: Verwendung vorgefertigter Docker-Images.
- Teil 2: Erstellung eigener Docker-Images auf Basis von Debian.

## Teil 1

Deploy: 
```bash
docker-compose up -d
```
WordPress ist unter http://localhost:8081 verfügbar.

## Teil 2

Deploy:
```bash
docker-compose build
docker-compose up -d
```
WordPress ist ebenfalls unter http://localhost:8081 verfügbar.

## Hinweise

- MySQL- und WordPress-Daten werden in persistenten Volumes gespeichert.
- Bei fehlerne Volumes als erstes löschen
```bash
 docker compose down -v
 ```
