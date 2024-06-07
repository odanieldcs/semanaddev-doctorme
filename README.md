# Semana DDev

Neste documento você encontra a relação de requisitos do projeto da 2ª Edição do evento, o link para alguns scripts utilizados durante o evento, arquivos do layout e informações úteis.

- [x] [Aula 01 em 03/Jun](https://danieldcs.com/2sdv-aula1) - Liberada
- [x] [Aula 02 em 05/Jun](https://danieldcs.com/2sdv-aula2) - Liberada
- [x] [Aula 03 em 07/Jun](https://danieldcs.com/2sdv-aula3) - Liberada
- [ ] Aula Bônus, mais informações na live do dia 07/Jun
- [x] [Live 01 em 03/Jun às 19h](https://danieldcs.com/2sdv-live1) - Realizada
- [x] [Live 02 em 05/Jun às 19h](https://danieldcs.com/2sdv-live2) - Realizada
- [x] [Live 03 em 07/Jun às 19h](https://danieldcs.com/2sdv-live3) - Programada

## Links úteis

[Figma, ferramenta para abrir o design do projeto.](https://figma.com/)

## Requisitos da API

A API deve garantir:

- [x] Garantir que a API tenha um código limpo e de fácil manutenção
- [x] Garantir que a API tenha uma forma ágil de acesso ao banco de dados
- [x] Garantir que a API tenha um tratamento de erros
- [x] Garantir que a API não pare quando algum erro for retornado
- [x] Garantir que a API valide qualquer payload recebido
- [x] Garantir que a API armazene senhas seguras
- [x] Garantir que a API isole as operações por casos de uso

A API deve ter os seguintes casos de uso:

- [x] Listar médicos
  - [x] Incluir no retorno a agenda de cada médico
- [x] Obter dados do médico
  - [x] Garantir que o ID de um médico foi enviado na chamada - Request
  - [x] Garantir que o ID do médico existe
  - [x] Retornar os dados do médico com a agenda
- [x] Obter dados do paciente
  - [x] Garantir o acesso somente a usuários autenticados - Request
  - [x] Garantir que o Telefone de um paciente foi enviado na chamada - Requesrt
  - [x] Garantir que o Telefone é de um paciente que existe
  - [x] Incluir no retorno os agendamentos
- [x] Criar conta do paciente
  - [x] Criar conta com nome, telefone e senha
  - [x] Garantir somente um usuário por telefone
- [x] Fazer login do paciente
  - [x] Garantir que o telefone é de um cadastro válido
- [x] Adicionar agendamento para o paciente
  - [x] Garantir que foi enviado o paciente e o id de agenda disponível - Request
  - [x] Garantir que a agenda está disponível

### Tabelas do sistema

- [ ] Patient _Paciente_
  - _Campos: ID, UserID, Name, Phone, CreatedAt_
  - _Relações: Appointments[], User_
- [ ] User
  - _Campos: ID, Phone, Password, CreatedAt_
  - _Relações: Patient_
- [ ] Appointment
  - _Campos: ID, Date, Made, PatientID, DoctorID, CreatedAt_
  - _Relações: Patient, Doctor_
- [ ] Doctor
  - _Campos: ID, FirstName, LastName, City, State, Speciality, Bio, Picture, Price, Availability, Experience, Attendances, Address, CreatedAt_
  - _Relações: Agenda, Appointment_
- [ ] Agenda
  - _Campos: ID, Date, Available, DoctorID, CreatedAt_
  - _Relações: Doctor_
