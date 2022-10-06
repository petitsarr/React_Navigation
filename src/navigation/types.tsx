/* 
------------Ajout de la vérification de type pour le navigateur de pile------- 

--Ce fichier contiendra des mappages
pour tous les noms de route et les paramètres de route 

*/ 


export type   HomeStackNavigatorParamList = {
    Home  : undefined ;
    Details : {
        name : string ; 
        birth_year : string ; 
    }
} 
/*  
--Un nom de route qui n'a pas de paramètres passés
 est spécifié avec undefined. Ainsi, par exemple, 
 dans l'extrait ci-dessus, avec la route Home : aucun paramètre n'est transmis au nom de la route. 

--La route DetailsScreen reçoit deux paramètres du HomeScreen.
 C'est pourquoi l'objet de mappage contient deux propriétés dans l'extrait ci-dessus. 


 Après avoir créé les mappages, 
 vous devez en informer le navigateur de pile
*/
