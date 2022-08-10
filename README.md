# Cadastro de Carro
### RF
- [ ] Deve ser possível cadastrar um novo carro

### RN
- [ ] Não deve ser possível cadastrar um carro com uma placa já existente
- [ ] Não deve ser possível alterar a placa de um carro já cadastrado
- [ ] O carro deve ser cadastrado como padrão, como disponível.
- [ ] O usuário responsável pelo cadastro deve ser um usuário adminsitrador
# Listagem de carros
### RF
- [ ] Deve ser possível listar os todos carros disponíveis
- [ ] Deve ser possível listar os todos carros disponíveis pelo nome da categoria
- [ ] Deve ser possível listar os todos carros disponíveis pelo nome da marca
- [ ] Deve ser possível listar os todos carros disponíveis pelo nome do carro  

### RN
- [ ] Para listar os carros o usuário não precisa estar logado no sistema.

# Cadastro de especificação no carro
### RF
- [ ] Deve ser possível cadastrar uma especificação para um carro
- [ ] Deve ser possível listrar todas as especificações

### RN
- [ ] Não deve ser possível cadastrar uma especificação para um carro não cadastrado
- [ ] Não deve ser possível cadastrar uma especificação já existente para um carro já cadastrado.
- [ ] O usuário responsável pelo cadastro de especificação deve ser um usuário adminsitrador

# Cadastro de imagens do carro
### RF
- [ ] Deve ser possível cadastrar a imagem do carro

### RNF
- [ ] Utilizar o multer para upload dos arquivos

### RN
- [ ] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
- [ ] O usuário responsável pelo cadastro de imagens deve ser um usuário adminsitrador
# Aluguel de carros
### RF
- [ ] Deve ser possível cadastrar um aluguel
### RN
- [ ] O aluguel deve ter duração mínima de 1 hora