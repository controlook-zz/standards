# GIT Commands

## ESTADOS:

- Modificado: 	**modified**
- Preparado:	**staged/index**
- Consolidado:	**comitted**


## AJUDA:
```
git help
git help add
git help commit
git help <comando>
```


## CONFIGURAÇÃO:

- As configurações do GIT são armazenadas no arquivo **.gitconfig** localizado dentro do diretório do usuário do SO.
- As configurações abaixo serão armazenadas dentro do arquivo citado acima.


### setar usuário
`git config --global user.name "Nome do Usuário"`

### setar email
`git config --global user.email "username@email.com"`

### setar editor
`git config --global core.editor vim`

### setar ferramenta de merge
`git config --global merge.tool vimdiff`

### setar arquivos a serem ignorados
`git config --global core.excludesfile ~/.gitignore`

### listar configurações
`git config --list`



## IGNORAR ARQUIVOS:

Os nomes de arquivos/diretórios ou extensões de arquivos listados no arquivos .gitignore não serão adicionados em um repositório. Existem dois arquivos **.gitignore**, são eles:

- **Geral**: Normalmente armazenado no diretório do usuário do Sistema Operacional. O arquivo que possui a lista dos arquivos/diretórios a serem ignorados por todos os repositórios deverá ser declarado conforme citado acima. O arquivo não precisa ter o nome de .gitignore.
- **Por respositório**: Deve ser armazenado no diretório do repositório e deve conter a lista dos arquivos/diretórios que devem ser ignorados apenas para o repositório específico.


## REPOSITÓRIO LOCAL:

### criar novo repositório local
`git init`

### verificar estado dos arquivos/diretórios
`git status`

## ADICIONAR ARQUIVOS/DIRETÓRIOS [staged area]

### adicionar um arquivo específico
`git add arquivo.php`

### adicionar um diretório específico
`git add diretório`

### adicionar todos os arquivos e diretórios 
```
git add .
git add -A
```

### adicionar um arquivo que está listado no .gitignore (geral ou do repositório)
`git add -f arquivo_no_gitignore.php`


## COMITTAR ARQUIVO/DIRETÓRIO:

### commitar um arquivo
`git commit arquivo.php`

### commitar vários arquivos/diretórios
`git commit arquivo1.php arquivo2.php`

### commitar informando mensagem de detalhamento
`git commit arquivo.php -m "Mensagem de detalhamento"`


## REMOVENDO ARQUIVO/DIRETÓRIO:

### remover arquivo
`git rm <arquivo.php>`

### remover diretório
`git rm -r <diretório>`


## VISUALIZAR HISTÓRICO:

### exibir histórico
`git log`

### exibir histórico com diff das duas últimas alterações
`git log -p 2`

### exibir resumo do histórico (hash completa, autor, data, comentário e qtde de alterações (+/-))
`git log --stat`

### exibir informações resumidas em uma linha (hash completa e comentário)
`git log --pretty=oneline`

### exibir histórico com formatação específica (hash abreviada, autor, data e comentário)
`git log --pretty=format:"%h - %an, %ar : %s"`

-	**%h**	=	abreviação do hash
-	**%an**	=	nome do autor
-	**%ar**	=	data
-	**%s**	=	comentário

### exibir o histórico de um arquivo específico
`git log -- <caminho_do_arquivo>`

### exibir histórico de um arquivo específico que contêm uma determinada palavra
`git log --summary -S<palavra> [<caminho_do_arquivo>]`

### exibir histórico de modificação de um arquivo
`git log --diff-filter=M -- <caminho_do_arquivo>`

-	**A**	=	adicionado
-	**C**	=	copiado
-	**D**	=	apagado
-	**M**	=	modificado
-	**R**	=	renomeado

### exibir o histórico de um determinado autor
`git log --author=usuario`

### exibir revisão e autor da última modificação de um bloco de linhas
`git blame -L 12,22 <arquivo.php>`



## DESFAZENDO OPERAÇÕES:

### desfazendo alteração local (working directory)
**-->>** Esse comando deve ser utilizado enquanto o arquivo não foi adicionado na **staged area**

`git checkout -- <arquivo.php>`

### desfazendo alteração local (staging area)
**-->>** Esse comando deve ser utilizado enquanto o arquivo já foi adicionado no *staged area*

`git reset HEAD <arquivo.php>`

	- se o resultado for: ***Unstaged changes after reset: \nM	arquivo.php*** o comando **NÃO** alterou nada.
	- a alteração do diretório pode ser realizada através do comando: 

`git checkout <arquivo.php>`



## REPOSITÓRIO REMOTO:

### exibir repositórios remotos
```
git remote
git remote -v
```

### vincular repositório local com um repositório remoto
```
git remote add <alias_repositorio_remoto> <URL_do_repositorio>
git remote add origin https://github.com/usuário/repositorio.git
```

### exibir informações dos repositórios remotos
`git remote show origin`

### renomear um repositório remoto
`git remote rename origin outro_nome`

### desvincular um repositório remoto
`git remote rm nome_repositório`

### enviar arquivos/diretórios para o repositório remoto
**-->>** o primeiro push de um repositório deve conter o nome do repositório remoto e a branch

`git push -u origin master`

**-->>** os demais *pushes* não precisam dessa informação

`git push`



## ATUALIZAR REPOSITÓRIO LOCAL DE ACORDO COM O REPOSITÓRIO REMOTO:

### atualizar os arquivos na branch atual
`git pull`

### buscar as alterações, mas não aplica-las na branch atual
`git fetch`

### clonar um repositório já existente
`git clone <URL_do_repositorio>`



## TAGS:

### criando uma tag leve
`git tag vs-1.1`

### criando uma tag anotada
`git tag -a vs-1.1 -m "Minha versão 1.1"`

### criando uma tag assinada
**-->>** para criar uma tag assinada é necessário uma chave privada (GNU Privacy Guard - GPG)

`git tag -s vs-1.1 -m "Minha tag assinada 1.1"`

### criando uma tag a partir de um commit (hash)
`git tag -a vs-1.2 <9fceb02>`

### criando tags no repositório remoto
`git push origin vs-1.2`

### criando todas as tags locais no repositório remoto
`git push origin --tags`



## BRANCHES:

- O **master** é o branch principal do GIT.
- O **HEAD** é um ponteiro especial que indica qual é a branch atual. Por padrão, o **HEAD** aponta para o branch principal, o **master**.

### criando uma nova branch
`git branch <nome_da_branch>`

### trocando para uma branch existente
`git checkout <nome_da_branch>`

**-->>** nesse caso, o ponteiro principal **HEAD** está apontando para a branch <nome_da_branch>

### criar uma nova branch e trocar
`git checkout -b <nome_da_branch>`

### voltar para a branch principal (master)
`git checkout master`

### resolver merge entre as branches
`git merge <nome_da_branch>`

**-->>** para realizar o merge, é necessário estar no branch que deverá receber as alterações. O merge pode ser automático ou manual. O merge automático será feito em arquivos de texto que não sofreram alterações nas mesmas linhas, já o merge manual será feito em arquivos de texto que sofreram alterações nas mesmas linhas.

### apagando uma branch
`git branch -d <nome_da_branch>`

### listar branches
`git branch`

### listar branches com informações dos últimos commits
`git branch -v`

### listar branches que já foram fundidos (merged) com o master
`git branch --merged`

### listar branches que não foram fundidas (merged) com o master
`git branch --no-merged`

### criando um branch remoto com o mesmo nome
`git push origin <nome_branch>`

### criando um branch remoto com nome diferente
`git push origin <nome_local>:<nova_branch>`

### baixar um branch remoto para edição
`git checkout -b <nome_local> origin/<nome_remoto>`

### apagar branch remoto
`git push origin:<nome_branch>`



## REBASING:

- Para alternar entre um branch e outro é necessário fazer o commit das alterações atuais para depois trocar para um outro branch. Se existir a necessidade de ralizar a troca sem fazer o commit é possível criar um **stash**. O Stash serve como se fosse um branch temporário que contém apenas as alterações ainda não commitadas.


### fazendo o rebase entre um branch e o master
```
git checkout <experiment>
git rebase master
```

### criar um stash 
`git stash`

### listar stashes
`git stash list`

### voltar para o último stash
`git stash apply`

### voltar para um stash específico ( onde **2** é o índice do stash desejado )
`git stash apply stash@{2}`

### criar um branch a partir de um stash
`git stash <branch> <meu_branch>`



## REESCREVENDO O HISTÓRICO:

### Atenção! 
- É possível alterar a ordem dos commits ou remover um commit apenas mudando as linhas ou removendo.

### alterando as mensagens de commit 
`git commit --amend -m "Minha nova mensagem"`

### alterando os últimos 3 commits 
`git rebase -i HEAD~3`

**-->>** 1- O editor de texto será aberto contendo as linhas que representam os 3 últimos commits
exemplo:
```
	pick f7f3f6d changed my name a bit
	pick 310154e updated README formatting and added blame
	pick a5f4a0d added catfile
```

**-->>** 2- Altere para **edit** os commits que deseja realizar alterações
exemplo:
```
	edit f7f3f6d changed my name a bit
	pick 310154e updated README formatting and added blame
	pick a5f4a0d added catfile
```

**-->>** 3- Digite o comando para alterar a mensagem do commit que foi marcado como **edit**

`git commit --amend -m "Nova mensagem"`

**-->>** 4- Aplique a alteração

`git rebase --continue`


**-->>** juntando vários commits (mesmos passos acima, porém marcando os commits que devem ser juntados com *squash

### remover todo histórico de um arquivo
`git filter-branch --tree-filter 'rm -f arquivo.txt' HEAD`



## BISECT:

- O **bisect** (pesquisa binária) é útil para encontrar um commit que está gerando um bug ou uma insconsistência entre uma sequência de commits.

### iniciar pesquisa binária 
`git bisect start`

### marcar o commit atual como ruim
`git bisect bad`

### marcar o commit de uma tag que está sem o bug/inconsistência
`git bisect good vs-1.1`

### marcar o commit como bom (0 GIT irá navegar entre os commits para ajudar a identificar o commit que está com o problema. Se o commit atual não estiver quebrado, então é necessário marca-lo como bom)
`git bisect good`

### marcar o commit como ruim (se o commit estiver com problema, então deve ser marcado como ruim)
`git bisect bad`

### finalizar a pesquisa binária
`git bisect reset`






## Links: 
- https://pt.wikiversity.org/wiki/Git_Avançado

