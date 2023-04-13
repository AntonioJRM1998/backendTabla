export class UsersDTO {
  user_id: string
  username: string
  password: string
  email: string
  deposit: number
  birthdate: string
}
export class CryptoDTO{
  crypto_id:number
  crypto_name:string
  asset:string
  icon:string
  stock:number
  value:number
}

export class CyptoUserDTO{
  user_id: string
  crypto_id:number
  amount:number
}
