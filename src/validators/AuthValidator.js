import { object, string } from "yup"

export const signupSchema = object({
  firstname: string().matches(/^[a-zA-Z]+$/, 'Alphabet seuleument !').required('Ce champ est requis !'),
  lastname: string().matches(/^[a-zA-Z]+$/, 'Alphabet seuleument !').required('Ce champ est requis !'),
  email: string().email('Doit être un email valide !').required('Ce champ est requis !'),
  password: string().matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,255}$/, `Le mot de passe doit contenir au minimum:\n- 8 caractères\n- 1 majuscule\n- 1 minuscule\n- 1 chiffre\n- 1 caractère spécial\n- Pas d'espace !`).required('Ce champ est requis !')
});

export const loginSchema = object({
  email: string().email('Doit être un email valide !').required('Ce champ est requis !'),
  password: string().matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,255}$/, `Le mot de passe doit contenir au minimum:\n- 8 caractères\n- 1 majuscule\n- 1 minuscule\n- 1 chiffre\n- 1 caractère spécial\n- Pas d'espace !`).required('Ce champ est requis !')
});