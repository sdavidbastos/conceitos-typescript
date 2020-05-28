type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}
// Allias. 
let funcionarios: Funcionario = {
    supervisores: ['David', 'Bacelar', 'João'],
    baterPonto(horario:number): string{
        if(horario <= 8){
            return 'Ponto normal'
        } else {
            return 'Fora do horario'
        }
    }
}
