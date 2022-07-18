import React from "react";
import { object, string,ref} from 'yup';
const validations = object({
    email: string().email("Geçerli bir mail giriniz").required("Zorunlu alandır mailsiz giremezsiniz"),
    password:string().min(5,"Parolanız en az 5 karakter olmalıdır.").required("Şifresiz olmaz"),
    passwordConfirm:string().oneOf([ref("password")],"Parolalarınız uyuşmuyor...").required(),


});
export default validations;