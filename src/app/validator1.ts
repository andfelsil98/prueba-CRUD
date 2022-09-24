import { AbstractControl } from "@angular/forms";

export class MyValidator {


  static inscriptionHigher(control: AbstractControl){
    // console.log('hola');
    const birth = control.get('dateOfBirth')?.value;
    // const ageNum = Number(age);
    // console.log(birth)
    const inscription = control.get('dateOfInscription')?.value;
      const convertAge = new Date(birth);
      const convertInscription = new Date(inscription);
      // console.log(convertInscription)
      const milage = convertAge.getTime();
      const milins = convertInscription.getTime();
      if (milins < milage) {
        //console.log('inscripcion invalida')
        return {invalid_inscription: true}
      }//console.log('inscripcion valida')
       return null;
  }

  static matchAge(control: AbstractControl) {
    const birth = control.get('dateOfBirth')?.value;
    const age = control.get('age')?.value;
    const convertAge = new Date(birth); //La constante convertAge, toma lo que el usuario a ingresado en el input y lo convierte a una fecha usando el new Date, que es propio de JS para las fechas, al Date le pasamos la fecha ingresada, entre los paréntesis, que es controlada por la variable age y como la variable age fue declarada al inicio de nuestra App, fuera de nuestra función debemos usar antes  la palabra this.
    const timeDiff = Math.abs(Date.now() - convertAge.getTime()); //con timeDiff lo que logro es restar el tiempo que ha pasado en milisegundos desde (1/1/1970 hasta hoy) - (1/1/1970 hasta la fecha ingresada que se supone es la fecha de nacimiento) todo esto en valor  absoluto y me retorna esa diferencia en milisegundos que seria la edad de la persona en milisegundos
    const showAge = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
    if (showAge != age){
      return {invalid_age: true}
    } return null
  }


  static matchCost(control: AbstractControl) {
    const inscription = control.get('dateOfInscription')?.value;
    const cost = control.get('cost')?.value;
    const convertInscription = new Date(inscription); //La constante convertAge, toma lo que el usuario a ingresado en el input y lo convierte a una fecha usando el new Date, que es propio de JS para las fechas, al Date le pasamos la fecha ingresada, entre los paréntesis, que es controlada por la variable age y como la variable age fue declarada al inicio de nuestra App, fuera de nuestra función debemos usar antes  la palabra this.
    // console.log(convertInscription)
    const timeDiff = Math.abs(Date.now() - convertInscription.getTime()); //con timeDiff lo que logro es restar el tiempo que ha pasado en milisegundos desde (1/1/1970 hasta hoy) - (1/1/1970 hasta la fecha ingresada que se supone es la fecha de nacimiento) todo esto en valor  absoluto y me retorna esa diferencia en milisegundos que seria la edad de la persona en milisegundos
    const timeInscription = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
    const totalCost = timeInscription *100;
    // console.log(totalCost)
    if (cost != totalCost) {
      return {invalid_cost: true}
    } return null;
  }

  static matchName(control: AbstractControl) {
    let name = control.get('name')?.value;
    name = name.trimStart()
    if (!name.includes(" ")){
      return {invalid_name: true}
    } return null
  }
}




