import {NativeStackNavigationProp} from "@react-navigation/native-stack"
/* 
-------------------Ajout de la vérification de type pour le navigateur de pile------- 

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







 -----------------Ajout de vérifications de type pour les écrans---------------------------
--Pour ajouter une vérification de type pour un écran,
la première étape consiste à utiliser un type générique
pour définir des types pour les écrans individuels.
-- Chaque modèle de navigateur dans la bibliothèque React Navigation expose son type générique. 
Par exemple, NativeStackNavigationPropest utilisé pour @react-navigation/native-stack. 

--NativeStackNavigationProp acceptent deux paramètres.
Le premier est le type qui mappe les noms de route et leurs paramètres
Le second est le nom de l'écran sous la forme d'une chaîne qui correspond au nom de l'itinéraire du premier paramètre.  

--Le deuxième paramètre de NativeStackNavigationProp indique que l'écran Home n'obtient que le nom de route décrit
 comme possibilité vers laquelle l'écran d'accueil peut naviguer. 
Si le deuxième paramètre n'est pas défini, alors l'écran Home obtiendra 
tous les noms de routes du navigateur HomeStackn en tant que possibilités vers lesquelles il peut naviguer.
 
*/





export type HomeScreenNavigationProp = NativeStackNavigationProp<
HomeStackNavigatorParamList,"Details">  

