# TicketDrop

## Architecture Decisions: Index

| #  | Decision                  | Chosen                                              | Rejected options                                                                 |
|----|---------------------------|-----------------------------------------------------|----------------------------------------------------------------------------------|
| 1  | Backend stack             | Java + Spring Boot                                  | TypeScript + NestJS, C# + ASP.NET Core, Python + FastAPI                         |
| 2  | Frontend framework        | React                                               | Angular                                                                          |
| 3  | Frontend delivery model   | Single Page App built with Vite                     | Next.js (server-side rendering)                                                  |
| 4  | Repo layout               | One repo with `frontend/` and `backend/` side by side | Separate repos; workspace tooling (Nx, Turborepo)                              |
| 5  | Frontend folder structure | Feature-based (`app/`, `features/`, `pages/`, `shared/`) | Type-based, Feature-Sliced Design, Atomic Design, clean architecture, micro-frontends |