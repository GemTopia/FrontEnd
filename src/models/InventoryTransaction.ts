interface transaction {
  id: number;
  created_at: string;
  wallet_address: string;
  from_wallet: string;
  value: number;
}
export default transaction;
