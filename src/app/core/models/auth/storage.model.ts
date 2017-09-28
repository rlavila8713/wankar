export /**
 * User
 */
class StorageModel {
  constructor(
    public authorization_token: string = '',
    public user_id: string = '',
    public user: string = '',
    public name: string = '',
    public rol: string = '',
    public last_url: string = "/",
  ) { }
}
