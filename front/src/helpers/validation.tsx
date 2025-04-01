export const validateName = (name:string): string => {
    let validation = ""
    const regexCountry = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,50}$/

    if(!regexCountry.test(name)) validation = "Debe tener entre 1 y 50 letras."
    return validation
}
export const validatePhone = (name:string): string => {
    let validation = ""
    const regexCountry = /^\d{9,15}$/

    if(!regexCountry.test(name)) validation = " Ingresa solo números entre 9 y 15 dígitos"
    return validation
}
export const validateProvincia = (provincia:string): string => {
    let validation = ""
    const regexCountry = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,25}$/

    if(!regexCountry.test(provincia)) validation = " Ingresa una provincia"
    return validation
}
export const validateCiudad = (ciudad:string): string => {
    let validation = ""
    const regexCountry = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,50}$/

    if(!regexCountry.test(ciudad)) validation = " Ingresa una ciudad"
    return validation
}
