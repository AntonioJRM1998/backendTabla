export class UsersDTO {
  user_id: string
  username: string
  password: string
}
export class PedidosDTO{
    pedido_id:number
    nombre_Pedido:string
    user_id:string
}
export type NewUserDto = Omit<UsersDTO, "userId">;
export type NewPedidoDto = Omit<PedidosDTO, "pedidoId">; 

