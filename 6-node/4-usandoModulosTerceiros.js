// npm é o gerenciador de pacotes do node
// Aqui instalamos o lodash
    // npm i lodash

// Instalação global de dependencias

   // npm i -g nodemon

/* Pra funcionar o nodemon, tive de ativar via terminal:
PS C:\WINDOWS\system32> Get-ExecutionPolicy
Restricted
PS C:\WINDOWS\system32> Set-ExecutionPolicy Unrestricted

Execution Policy Change
The execution policy helps protect you from scripts that you do not trust. Changing the execution policy might expose
you to the security risks described in the about_Execution_Policies help topic at
https:/go.microsoft.com/fwlink/?LinkID=135170. Do you want to change the execution policy?
[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "N"): Y
PS C:\WINDOWS\system32> Get-ExecutionPolicy
Unrestricted

nodemon vai ficar rodando, e não precisa ficar rodando de volta, é só salvar e já roda


*/



// Comum, quando usar lib, começar com _
// Quando não colaca-se nada, ele procura na pasta por um arquivo index.js dentro de node_modules
const _ = require('lodash')

setInterval(() => {
  console.log(_.random(1,50))
}, 2000);
