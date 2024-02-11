class Livre{
    constructor(titre,auteur,anné){
        this.titre = titre
        this.auteur = auteur
        this.anné = anné
    }
}

class Bibliotheque{
    livres = []
    
    ajouterLivre(l){
        if(l instanceof Livre){
            this.livres.push(l)
        }else{
            throw new Error("Le livre doit etre une instance de la classe Livre")
        }
    }

    findBook(str){
        
        for(let i in this.livres){
            if(this.livres[i].titre === str){
                return this.livres[i]
            }
        }

        throw new Error("Le livre na pas été trouver ou n'existe pas")
    }

    removeBook(l){
        
        for(let i in this.livres){
            if(this.livres[i].titre === l){
                this.livres.splice(i,1)
                alert("le livre a été suprimmer")
            }
        }
        throw new Error("Le livre na pas été trouver ou n'existe pas")
    }

    AfficheAll(){
        if(this.livres.length === 0){
            throw new Error("Il n'y a pas de livre dans la bibliotheque")
        }
        for(let i of this.livres){
            console.log(i)
        }
    }
}

    const onePiece = new Livre("one piece","oda",1999)
    const snk = new Livre("snk","masaiko",2014)
    const mangaPlus = new Bibliotheque()
try{
    mangaPlus.ajouterLivre(onePiece)
    mangaPlus.ajouterLivre(snk)
    mangaPlus.findBook("one piece")
    mangaPlus.removeBook("one piece")
}catch(e){
    console.log(e.message,e)
}
