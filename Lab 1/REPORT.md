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