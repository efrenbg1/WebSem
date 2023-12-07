#### 1. Start Protégé and imagine a good namespace prefix and a namespace URI for modeling the Cycling domain. Provide this couple prefix/uri in your report and explain why you choose them.
> As it is a general cycling domain, we've decided to keep it general and not specify anything more than it is a general ontology in the cycling domain
> 
> This means that out couple prefix/uri will be **ontologies/cycling**

#### 2. In the cycling domain, a Race is either a OneDayRace or a SeveralStagesRace. There are no other types of race. Model these three classes in the ontology and write in the report the logical formula equivalent to this definition.
> $OneDayRace \sqsubseteq Race$
>
> $SeveralStagesRace \sqsubseteq Race$
>
> $Race \equiv OneDayRace \sqcup SeveralStagesRace$


#### 5. Define with necessary and sufficient conditions (i.e. strict equality) the Prologue class such as the Prologue is exactly always the first Stage of a SeveralStagesRace. You might have to introduce more properties or use the inverse of an existing property to do this modeling. Write in the report the logical formula equivalent to this definition.
> 
> We first need to define that we will always have on Prologue stage in a SeveralStagesRace (defined in the property composedOfPrologue):
> 
> $SeveralStagesRace \sqsubseteq \leq1Prologue$ 
>
> We know also that a Prologue will always be the first stage, and so we can define a new DataProperty called stageOrder of type nonNegativeInteger (order goes from 1 to n) and set it to always be equal to 1:
>
> $Prologue \sqsubseteq stageOrder(nonNegativeInteger)$ 
>
> $\forall Prologue.stageOrder, stageOrder=1$
>

Revisar ObjectProperty hasStage???


#### 6. Add the concept Person to the ontology. A Person can be a Spectactor, a RacePerson or a TeamPerson among others. A TeamPerson is exactly the union of a Doctor, a Director or a RaceCyclist. A RaceCyclist can himself be considered as a Rider, a Sprinter or a Climber. A Person has a name, an age, and a nationality. A Person participates in Race. Add all these classes and properties and the corresponding axioms. Explain in the report what are the differences between object and datatype properties.


#### 7. A Team is exactly composed of 1 Doctor, 1 Director and 10 RaceCyclist. Define this class using the belongsTo property. Explain in the report what can you say about this new property with respect to previously defined properties? 


#### 9. Load (import) the FOAF ontology using its http://xmlns.com/foaf/spec/ and align some of the concepts you have defined such as: the class Person is equivalent to the class Person defined in FOAF and the class Team is a subclass of the class Organisation defined in FOAF. Search for properties in the FOAF ontology to align with your own properties and add the corresponding mapping axioms. Write in the report the mappings you have discovered.


#### 11. Use the LOV search function at https://lov.linkeddata.es/dataset/lov/ and identify relevant classes and properties that could be re-used in your ontology. Write them down in your report.


#### 12. Validate your ontology by clicking on Reasoner and Start reasoner where HermiT is selected as the reasoning service. What is the result? Did you get the message “your ontology is coherent and consistent”?
