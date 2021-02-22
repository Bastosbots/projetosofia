// NÃO REMOVA OS CREDITOS POR FAVOR, LEVOU MUITO TEMPO PRA SE FAZER UM BOT ASSIM!
const config = require('./config/config.json')
const prefix = config.prefix
exports.help = help()
function help() {
	return `   *☾ 𝕊𝕆𝔽𝕀𝔸 ☽*

_ℹ️ - Me chamo Sofia e sou uma BOT criada para auxiliar este grupo._

_ℹ️ - Aproveite bem meus comandos, use com sabedoria e sem bagunçar._

_ℹ️ - Caso algum comando não funcione significa que o servidor caiu e é necessario esperar que volte._

*🌸 - ${prefix}sofia (mensagem) - 🌸*
_Quer conversar um pouco?_

*🌹 - ${prefix}frase - 🌹*
_Frases de pessoas._

*🌸 - ${prefix}level - 🌸*
_Mostra o progresso do seu nível comigo._

*🌹 - ${prefix}ranking - 🌹*
_Mostra o progresso do seu nível comigo._

*🌸 - ${prefix}perfil - 🌸*
_Mostra o seu perfil completo_

*🌹 - ${prefix}gif - 🌹*
_Faço suas Gif virarem sticker fácil!_

*🌸 - ${prefix}sticker - 🌸*
_Faço suas imagens virarem sticker também!_

*🌹 - ${prefix}speak <mensagem> - 🌹*
_Vamos conversar por voz?_

*🌸 - ${prefix}tts (sigla de idioma) [frase] - 🌸*
_Eu também posso fazer mimica! Por voz!_

*🌹 - ${prefix}idiomas - 🌹*
_Isso e para usar com o comando de cima._

*🌸 - ${prefix}groupinfo - 🌸*
_Veja algumas informações desse grupo._

*🌹 - ${prefix}anime [nome] - 🌹*
_Com isso você pesquisa um anime._

*🌸 - ${prefix}criarfrase [frase] - 🌸*
_Que tal criar sua propria frase inspiradora?_

*🌹 - ${prefix}search (digite numa foto) - 🌹*
_Com isso você pode pesquisar fotos para achar o nome do anime._

*🌸 - ${prefix}randomwall - 🌸*
_Mais wallpapers de anime, mas desse vez são de personagens._

*🌹 - ${prefix}botstat - 🌹*
_Eu coloco aqui diversas informações minhas sobre mensagens._

*🌸 - ${prefix}criador - 🌸*
_Quer conhecer o criador do grupo mas tem preguica de anotar os números? Use isso!_

*🌹 - ${prefix}link - 🌹*
_Se quiser obter o link do grupo, é só usar este comando._

*🌸 - ${prefix}adms - 🌸*
_Com isso eu chamo e te mostro quem são os ADMS do grupo._

*🌹 - ${prefix}flip - 🌹*
_O velho joguinho de cara e coroa..._

*🌸 - ${prefix}roll - 🌸*
_Esse é o famoso jogo do par ou impar, ou seja, dados._

*🌹 - ${prefix}kiss @marque_uma_Pessoa - 🌹*
_Vou fazer você e sua pessoa querida se beijarem!_

*🌸 - ${prefix}image <nome> - 🌸*
_Está sem internet fora do WhatsApp? Posso ajudar mandando fotos do pinterest._

*🌹 - ${prefix}msg <frase> - 🌹*
_Vamos brincar de mimica por texto?_

*🌸 - ${prefix}diario <frase> - 🌸*
_Caso você queira escrever no meu diario use isso._

*🌹 - ${prefix}img <marque um sticker> - 🌹*
_Se quiser pegar a foto de um sticker, posso converte-la para você._

*🌸 - ${prefix}slap @marque_alguém - 🌸*
_Irei de ajudar a descer um tapasso nos outros._

*🌹 - ${prefix}ship <@pessoa @pessoa> - 🌹*
_Quer saber o quanto seus amigos combinam?_

*🌸 - ${prefix}icon - 🌸*
_Icones para por no perfil._

*🌹 - ${prefix}face - 🌹*
_Icon do rosto de garotas de anime._

*🌸 - ${prefix}moddroid <nome> - 🌸*
_Busque aplicativos de android na moddroid._

*🌹 - ${prefix}happymod <nome> - 🌹*
_Busque apps na happymod._

*🌸 - ${prefix}get <marque um arquivo> - 🌸*
_Peça pra bot reenviar um arquivo._

*🌹 - ${prefix}fatos - 🌹*
_Conta fatos de animais_

*🌸 - ${prefix}curiosidade - 🌸*
_Adquira curiosidades._

*🌹 - ${prefix}chance <Do que> - 🌹*
_Calcule as chances._

*🌸 - ${prefix}data - 🌸*
_Data do sistema._

*_Use os comandos com cuidado, não faça bagunça no grupo_*

*_Quer ter um bot para seu grupo? fale com meu criador_*

*_Whats do Criador: wa.me/+5569985001678_*`
}

exports.down = down()
function down() {
    return `
	*☾ Downloads ☽*
	
*Caso algum comando não funcione significa que o servidor caiu e é necessario esperar.*

*🌸 - ${prefix}Mp3 <link do YouTube> - 🌸*
_Baixe audios por link._

*🌹 - ${prefix}Mp4 <link do YouTube> - 🌹*
_Baixe videos por link._

*🌸 - ${prefix}fb <link facebook> - 🌸*
_Baixe videos do facebook._

*🌹 - ${prefix}ig <link instagram> - 🌹*
_Baixe videos do instagram._

*🌸 - ${prefix}tw <link twitter> - 🌸*
_Baixe videos do twitter._`
}

exports.adult = adult()
function adult() {
    return `

☾ Comandos do PV - Grupos NSFW ☽

*1 - ${prefix}RandomNeko*
_Temos hentai de nekos por aqui e.e_

*2 - ${prefix}iHentai*
_Mas se nõ gostar, temos aleatorios também!_

*3 - ${prefix}nh (codigo)*
_Seja feliz vendo NHentai comigo e.e_

*4 - ${prefix}trap*
_Se você gosta de traps, isso é pra você e.e_

*5 - ${prefix}blowjob*
_Fotinhas de blowjob em anime._

*6 - ${prefix}iecchi*
_Umas fotos de ecchi que tenho aqui..._

*7 - ${prefix}feet*
_Hentai para os amantes de pezinho._

*8 - ${prefix}Lick*
_"Lambidinha..."_

*9 - ${prefix}Femdom*
_Meio que um yuri...hentai..._

*10 - ${prefix}futanari*
_Vai uma futanari?_

*11 - ${prefix}boobs*
_Olha a tetinhaaa..._

*12 - ${prefix}masturb*
_Hmmm, garotas solo..._

*13 - ${prefix}Anal*
_Hentai "padrão" de anal claro._

*14 - ${prefix}nsfwicon*
_Foto de perfil +18 por aqui..._

*15 - ${prefix}randomLoli*
_Hentai do tipo Lolicon._

*16 - ${prefix}Hard*
_Hentai de diciplinação, por exemplo, hentai de tapas na bunda._

*17 - ${prefix}Pezinho*
_Fotos de pezinho._

*18 - ${prefix}Porn*
_Pornografia real._

*19 - ${prefix}Lesbian*
_Lesbicas reais se pegando._

*20 - ${prefix}Pgay*
_Pornografia gay para quem curte._

*21 - ${prefix}Tits*
_Fotos de peitos reais._

*22 - ${prefix}bsdm*
_Fotos BDSM._

*23 - ${prefix}Milf*
_Milfs reais._

*24 - ${prefix}Pussy*
_Belas maças cortadas pela metade..._

*25 - ${prefix}Ass*
_Bundas..._

*26 - ${prefix}sporn*
_Pesquise no Xvideos._

*27 - ${prefix}xvideos <link>
_Baixe pornografia do xvideos._`
}

exports.owner = owner()
function owner() {
    return `
*⚠ [Meu dono Apenas] ⚠*

*1 - ${prefix}Clearall*
_Com isso todas as mensagens são limpas, cuidado com bugs em imunes._

*2 - ${prefix}Broad <-all/-gp> (mensagem)*
_Posso enviar uma mensagem para todos ou apenas os grupos usando, mas cuidado com BAN._

*3 - ${prefix}Leaveall*
_Se desejar saio de todos os grupos._

*4 - ${prefix}Tela*
_Peça-me um print da tela._

*5 - ${prefix}Blocklist*
_Saiba quem tentou me ligar, atacar ou floodar._

*6 - ${prefix}welcome [enable|disable]*
_Me faz dar Boas-Vindas e Good-Bye._

*7 - ${prefix}encerrar*
_Faz com que eu me desligue._

*8 - ${prefix}Exclusive [on|off]*
_Ativa os comandos exclusivos como bomb, anti links/porno._

*9 - ${prefix}kickall*
_Remova todos os membros._

*10 - ${prefix}cmd <comando>*
_Rode terminal/programação pelo WhatsApp._

*11 - ${prefix}mutepv <número sem + ou ->*
_Mande a Íris ignorar pessoas no PV._

*12 - ${prefix}block <numero> ou <marque uma mensagem>*
_Bloqueia pessoas._

*13 - ${prefix}unblock <numero> ou <marque uma mensagem>*
_Desbloqueia pessoas._`
}

exports.admins = admins()
function admins() {
    return `
*⚠ [Administradores Apenas] ⚠*
_Comandos que apenas os ademiros podem usar!_

*1 - ${prefix}kick @user ou <Marque uma mensagem>*
_Expulse bebados do bar (pode ser mais de 1)._

*2 - ${prefix}promote @user ou <Marque uma mensagem>*
_Faça os bebados do bar virarem administradores._

*3 - ${prefix}leave*
_Se quiser eu saio do barzinho._

*4 - ${prefix}demote @user ou <Marque uma mensagem>*
_Isso é pra você demitir administradores do barzinho._

*5 - ${prefix}everyone <assunto>*
_Marque todos os bebados para uma porradaria! ~Brincadeira, ou não~_

*6 - ${prefix}del [Marque a mensagem do BOT]*
_Se precisar deletar minhas mensagens, use isso._

*7 - ${prefix}onlyadms [on|off]*
_Com isso eu fecho o bar apenas para os administradores, e vice versa._

*8 - ${prefix}setimage*
_Dê ao seu bar uma cara nova!_

*9 - ${prefix}revoke*
_Se usar isso, eu irei resetar o link._

*10 - ${prefix}Bomb <número sem espaco, + e - >*
_Ataque com spam SMS quem vier fazer gracinhas em seu grupo._

*11 - ${prefix}blacklist <on/off>*
_Bane quem tiver nela quando entrarem no grupo._

*12 - ${prefix}fake <on/off>*
_Bane números de fora do seu país._

*13 - ${prefix}bklist <on/off número>*
_Adicione ou remova pessoas da blacklist._

*14 - ${prefix}mute <on/off>*
_Faz com que eu pare de fazer comandos no grupo de quem usou._

*15 - ${prefix}unkick <Marque uma mensagem>*
_Desfaz um ban._

*16 - ${prefix}autosticker <on/off>*
_Faz stickers com todas as fotos que mandarem._
`
}

exports.readme = readme()
function readme() {
    return `
☾ Menu de ajuda ☽

Caso não entenda, chame o meu dono, use o comando ${prefix}criador ou pergunte no grupo que alguém com certeza te ajudará! XD

Quando eu tiver tempo colocarei tutoriais aqui e.e

Obrigado pelo uso!

Programador oficial desse BOT: wa.me/5518998044132`
}

exports.donate = donate()
function donate() {
    return `
_Não é necessário, mas caso você queira contibuir, o picpay do criador desse bot é =_

@userlucas123

_O PIX é =_ 

fc270199-2d55-4d91-be5c-bfbd431cfad4

_Se caso precisar, venha falar comigo na github pelo =_ github.com/KillovSky/iris _ou pelo WhatsApp_ wa.me/+5518998044132.
❤️`
}

exports.lang = lang()
function lang() {
    return `
☾ Linguas do comando de Voz ☽
       ☾ Use sem ' ' ☽
	
'af' =  'Africano'

'ar' =  'Arabico'

'au' =  'Inglês da Australia'

'br' =  'Português do Brasil'

'ca' =  'Catalã (Catalonia)'

'cn' =  'Chinês (Mandarin/China)'

'cs' =  'Tcheca'

'cy' =  'Galês'

'da' =  'Dinamarquês'

'de' =  'Germanico/Alemão'

'el' =  'Grega'

'en' =  'Inglês'

'eo' =  'Esperanto'

'es' =  'Espanhol'

'fi' =  'Finlandês'

'fr' =  'Francês'

'hi' =  'Hindi'

'hr' =  'Croácio'

'ht' =  'Haitiano'

'hu' =  'Húngaro'

'hy' =  'Armenico'

'id' =  'Indonesio'

'is' =  'islandês'

'it' =  'Italiano'

'jp' =  'Japonês'

'ko' =  'Coreano'

'la' =  'Latim'

'lv' =  'Letonês'

'mk' =  'Macedónio'

'nl' =  'Holandês'

'no' =  'Norueguês'

'pl' =  'Polonês'

'pt' =  'Português de Portugal'

'ro' =  'Romeno'

'ru' =  'Russo'

'sk' =  'Eslovaco'

'sp' =  'Espanhol da Espanha'

'sq' =  'Albanês'

'sr' =  'Servia'

'su' =  'Espanhol dos Estados Unidos'

'sv' =  'Sueco'

'sw' =  'Suaíli'

'ta' =  'Tamil'

'th' =  'Thailandês'

'tr' =  'Turco'

'tw' =  'Chinês (Mandarin/Taiwan)'

'uk' =  'Inglês do Reino Unido)'

'us' =  'Inglês dos Estados Unidos'

'vi' =  'Vietnamita'

'yu' =  'Chinês (Cantonesa)'

'zh' =  'Chinês'`
}

exports.convh = convh()
function convh() {
	return `_Para usar você deve digitar_ *${prefix}conv [-sigla] [Número para conversão]* _, confira abaixo as siglas e um exemplo._
	
*-h* _= Esse menu._

*-c* _= Converte de Fahfenheit para Celsius._

*-f* _= Converte Celsius para Fahfenheit._

*-q* _= Converte Milhas para Quilômetros._

*-m* _= Converte Quilômetros para Milhas._

_Exemplo de uso:_ *${prefix}conv -c 113*
`}
