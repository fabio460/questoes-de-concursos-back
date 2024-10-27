import { routeType } from "../types";
import autenticaRouter from "./autenticarRouter";
import questoesRouter from "./questoeRouter";
import usuarioRouter from "./usuarioRouter";

export const router:routeType = [
   {endpoint:"/usuario", route:usuarioRouter},
   {endpoint:"/autenticar", route:autenticaRouter},
   {endpoint:"/questoes", route:questoesRouter}
]