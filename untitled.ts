interface DadosDoUsuario {
  id: string, nome: string, email: string
}
function cadastrarUsuario(: DadosDoUsuario) {
  console.log(id, nome, email)
}

class CadastrarAdministrador {
  cadastro() {
    cadastrarUsuario("8", "Nyc", "jublew@hotmail.com");
  }
}

class CadastrarVendedor {
  cadastro(): string {
    cadastrarUsuario("234234", "luana", "meleca@demacaco.com")
    return "holy shit"
  }
}