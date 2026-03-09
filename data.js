// ============================================
// Ernest Hemingway — Complete Works Data
// ============================================

const WORKS = [
  {
    id: 1,
    title: "Three Stories and Ten Poems",
    year: 1923,
    type: "stories",
    description: "Hemingway's very first published book, a slim volume printed in Paris containing three short stories and ten poems.",
    themes: ["Youth", "Loss", "Nature", "Coming of Age"],
    background: "Published by Robert McAlmon's Contact Publishing in Paris with a print run of only 300 copies. The three stories — 'Up in Michigan,' 'Out of Season,' and 'My Old Man' — already displayed the spare, direct prose style that would become Hemingway's signature. Gertrude Stein had told him 'Up in Michigan' was 'inaccrochable' (unpublishable) due to its frank sexual content, but McAlmon included it regardless.",
    significance: "Though largely overlooked at the time, this debut marked the beginning of one of the most important literary careers of the 20th century. The clear, declarative sentences and emotional restraint visible here would revolutionize American fiction."
  },
  {
    id: 2,
    title: "in our time",
    year: 1924,
    type: "stories",
    description: "A collection of vignettes — short, intense prose sketches — published in lowercase as a small press edition in Paris.",
    themes: ["War", "Violence", "Bullfighting", "Trauma"],
    background: "Published by Bill Bird's Three Mountains Press in an edition of 170 copies, this was not the same as the later 'In Our Time' (1925). These brief inter-chapters, most only a paragraph long, depicted scenes of war, bullfighting, and execution with startling immediacy. Ezra Pound championed the work and helped arrange its publication.",
    significance: "These compressed vignettes demonstrated Hemingway's revolutionary 'iceberg theory' in its purest form — each sketch suggested vast emotional depths beneath a deceptively simple surface. They later appeared as the inter-chapters in the expanded 1925 collection."
  },
  {
    id: 3,
    title: "In Our Time",
    year: 1925,
    type: "stories",
    description: "Hemingway's breakthrough short story collection, interweaving the Nick Adams stories with stark vignettes of war and violence.",
    themes: ["Loss of Innocence", "War", "Nature", "Masculinity", "Disillusionment"],
    background: "Published by Boni & Liveright in New York, this expanded collection interspersed full short stories with the brief vignettes from the 1924 Paris edition. The stories follow Nick Adams from boyhood in Michigan through wartime experiences to young adulthood, creating a fragmented but powerful portrait of a generation scarred by World War I. Stories like 'Indian Camp,' 'The End of Something,' 'Soldier's Home,' and 'Big Two-Hearted River' are now considered masterpieces of the short story form.",
    significance: "This collection established Hemingway as a major new voice in American literature. The Nick Adams stories created an enduring literary character, and the innovative structure — alternating intimate stories with impersonal vignettes — influenced generations of writers."
  },
  {
    id: 4,
    title: "The Torrents of Spring",
    year: 1926,
    type: "novel",
    description: "A satirical novella parodying the style of Sherwood Anderson and the literary fashions of the day.",
    themes: ["Satire", "Literary Parody", "American Identity"],
    background: "Written in just ten days in late 1925, this novella was a deliberate parody of Sherwood Anderson's novel 'Dark Laughter.' Many believe Hemingway wrote it partly as a calculated move to break his contract with Boni & Liveright (Anderson's publisher), freeing him to sign with the more prestigious Scribner's, where his editor Maxwell Perkins awaited. The satire strained his friendship with Anderson, who had been an early supporter.",
    significance: "While considered a minor work, it demonstrated Hemingway's sharp wit and critical eye. More importantly, the contractual maneuvering it enabled led to his legendary partnership with Scribner's and editor Maxwell Perkins."
  },
  {
    id: 5,
    title: "The Sun Also Rises",
    year: 1926,
    type: "novel",
    description: "The quintessential Lost Generation novel, following expatriates through Paris and the Pamplona bullfights.",
    themes: ["Lost Generation", "Disillusionment", "Masculinity", "Impotence", "Expatriate Life", "Bullfighting", "Love"],
    background: "Based largely on Hemingway's own experiences, the novel follows Jake Barnes — an American journalist rendered impotent by a war wound — and Lady Brett Ashley through the cafés of Paris and the fiesta of San Fermín in Pamplona. The characters' aimless drinking, traveling, and failed relationships embody the spiritual emptiness of the post-WWI generation. Many characters were thinly veiled portraits of Hemingway's real-life circle, causing considerable controversy among his friends.",
    significance: "Published by Scribner's, this novel made Hemingway famous at age 27. It defined the 'Lost Generation' ethos, popularized Pamplona's running of the bulls worldwide, and established the Hemingway style — spare, rhythmic prose with profound emotional undercurrents — as a dominant force in modern literature. Gertrude Stein's phrase 'You are all a lost generation' served as one of the novel's epigraphs."
  },
  {
    id: 6,
    title: "Men Without Women",
    year: 1927,
    type: "stories",
    description: "A landmark short story collection featuring some of Hemingway's most celebrated stories, including 'The Killers' and 'Hills Like White Elephants.'",
    themes: ["Masculinity", "Violence", "Communication", "Isolation", "Grace Under Pressure"],
    background: "This collection of 14 stories cemented Hemingway's reputation as a master of the short story. 'Hills Like White Elephants' — a conversation between a man and a woman at a Spanish train station about an unspoken abortion — is perhaps the most famous example of his iceberg theory. 'The Killers' brought hard-boiled menace to literary fiction. 'In Another Country' drew on his Milan hospital experiences. 'The Undefeated' explored the world of Spanish bullfighting with deep empathy.",
    significance: "The collection demonstrated the extraordinary range of Hemingway's short fiction and his unmatched ability to convey complex emotional truths through surface simplicity. 'Hills Like White Elephants' became one of the most widely studied and anthologized short stories in the English language."
  },
  {
    id: 7,
    title: "A Farewell to Arms",
    year: 1929,
    type: "novel",
    description: "Hemingway's masterful novel of love and war, tracing an American ambulance driver's romance with a British nurse during World War I.",
    themes: ["War", "Love", "Loss", "Disillusionment", "Escape", "Death", "The Futility of War"],
    background: "Drawing heavily on Hemingway's own wartime experience as an ambulance driver on the Italian front and his love affair with nurse Agnes von Kurowsky, the novel follows Lieutenant Frederic Henry through the chaos of the Italian campaign, his desertion, and his doomed love affair with Catherine Barkley. Hemingway rewrote the ending 47 times, famously saying he did so to 'get the words right.' The novel was initially serialized in Scribner's Magazine, and the final devastating pages are among the most powerful in American literature.",
    significance: "Widely considered one of the greatest war novels ever written, it combined an unflinching portrayal of war's horror with a tender, tragic love story. The novel solidified Hemingway's place among the foremost American novelists and remains a defining work of the Lost Generation."
  },
  {
    id: 8,
    title: "Death in the Afternoon",
    year: 1932,
    type: "nonfiction",
    description: "A comprehensive treatise on the art and ritual of Spanish bullfighting, blending cultural analysis with Hemingway's philosophy of writing.",
    themes: ["Bullfighting", "Death", "Courage", "Art", "Ritual", "Writing Craft"],
    background: "Based on years of attending bullfights across Spain beginning in the early 1920s, this book was Hemingway's passionate defense and explanation of the corrida. More than a bullfighting manual, it contains his famous 'iceberg theory' of writing: 'If a writer of prose knows enough about what he is writing about he may omit things that he knows and the reader, if the writer is writing truly enough, will have a feeling of those things as strongly as though the writer had stated them.' The book features an extended dialogue with an invented 'Old Lady' character.",
    significance: "Beyond its importance as a document of Spanish bullfighting culture, the book contains some of Hemingway's most revealing statements about his artistic principles. The iceberg theory articulated here became one of the most influential concepts in modern fiction writing."
  },
  {
    id: 9,
    title: "Winner Take Nothing",
    year: 1933,
    type: "stories",
    description: "A collection of 14 short stories exploring themes of loss, desperation, and human endurance.",
    themes: ["Despair", "Loss", "Endurance", "Identity", "Isolation"],
    background: "Published during the Great Depression, this collection includes stories like 'A Clean, Well-Lighted Place' — a profound meditation on nothingness and dignity — 'The Gambler, the Nun, and the Radio,' and 'Fathers and Sons.' The title comes from a passage about gambling: 'Winner take nothing, loser to pay.' Several stories dealt with themes Hemingway had not previously explored, including homosexuality ('The Sea Change') and religious crisis.",
    significance: "'A Clean, Well-Lighted Place' is one of the most celebrated short stories in world literature, a masterclass in conveying existential despair through minimal dialogue and restrained prose. The collection showed Hemingway deepening his emotional and philosophical range."
  },
  {
    id: 10,
    title: "Green Hills of Africa",
    year: 1935,
    type: "nonfiction",
    description: "An account of a month-long safari in East Africa, blending hunting narrative with literary criticism and reflections on writing.",
    themes: ["Nature", "Competition", "Africa", "Writing", "Masculine Identity"],
    background: "Based on a 1933-34 safari in Kenya and Tanganyika (now Tanzania) with his second wife Pauline, the book attempted to write a true account of an African hunting expedition that would read like fiction. Hemingway includes extended discussions of American literature, famously declaring that 'All modern American literature comes from one book by Mark Twain called Huckleberry Finn.' The competitive dynamics between Hemingway and the other hunters provide narrative tension.",
    significance: "While initially receiving mixed reviews, the book established Africa as an important Hemingway setting and demonstrated his belief that non-fiction could achieve the emotional power of fiction. His famous pronouncement about Huckleberry Finn remains one of the most quoted statements in American literary criticism."
  },
  {
    id: 11,
    title: "To Have and Have Not",
    year: 1937,
    type: "novel",
    description: "A socially conscious novel set in Key West and Cuba, following a fishing boat captain driven to smuggling by economic desperation.",
    themes: ["Economic Inequality", "Desperation", "Individualism vs. Community", "Violence", "Class"],
    background: "Hemingway's most explicitly political novel, set during the Great Depression, follows Harry Morgan, a tough charter boat captain in Key West who turns to running contraband between Cuba and Florida after losing his livelihood. The novel was partly assembled from previously published short stories and shifts between multiple perspectives. It reflects Hemingway's growing social awareness during the 1930s and his observation of the stark divide between the wealthy and desperate in Depression-era Key West.",
    significance: "Though considered one of Hemingway's weaker novels, it marked his first engagement with social and political themes that would deepen in his Spanish Civil War writing. Harry Morgan's dying words — 'No matter how a man alone ain't got no bloody chance' — signaled Hemingway's move from individualism toward collective solidarity."
  },
  {
    id: 12,
    title: "The Fifth Column and the First Forty-Nine Stories",
    year: 1938,
    type: "stories",
    description: "A collection pairing Hemingway's only full-length play with all 49 of his published short stories to date.",
    themes: ["War", "Espionage", "Love", "The Spanish Civil War"],
    background: "This omnibus volume collected all of Hemingway's published short stories alongside 'The Fifth Column,' a play set during the siege of Madrid in the Spanish Civil War. Hemingway wrote the play in the Hotel Florida in Madrid while shells literally fell on the building. The play, about an American counterespionage agent torn between duty and love, reflected Hemingway's own experiences as a correspondent during the war and his relationship with journalist Martha Gellhorn, who would become his third wife.",
    significance: "As a comprehensive collection, it demonstrated the extraordinary scope and consistent quality of Hemingway's short fiction. The new stories added, including 'The Short Happy Life of Francis Macomber' and 'The Snows of Kilimanjaro,' are considered among the finest short stories ever written in English."
  },
  {
    id: 13,
    title: "For Whom the Bell Tolls",
    year: 1940,
    type: "novel",
    description: "An epic novel of the Spanish Civil War, following an American dynamiter's mission to blow a bridge behind fascist lines.",
    themes: ["War", "Sacrifice", "Love", "Political Idealism", "Death", "Brotherhood", "Duty"],
    background: "Hemingway's longest novel, inspired by his extensive experience as a war correspondent during the Spanish Civil War (1936-1939). The story takes place over just four days as Robert Jordan, an American professor and volunteer, prepares to demolish a bridge to support a Republican offensive. His love affair with Maria, a young woman rescued from fascist captivity, unfolds against the backdrop of guerrilla warfare. The title comes from John Donne's famous meditation: 'Never send to know for whom the bell tolls; it tolls for thee.'",
    significance: "A massive bestseller and critical triumph, it was nominated for the Pulitzer Prize (though the board overruled the jury and gave no prize that year). The novel marked Hemingway's most ambitious engagement with political and moral themes and is considered one of the greatest novels about the Spanish Civil War."
  },
  {
    id: 14,
    title: "Across the River and into the Trees",
    year: 1950,
    type: "novel",
    description: "A melancholic novel about an aging American colonel's final days in Venice, reflecting on war, love, and mortality.",
    themes: ["Aging", "Mortality", "Love", "Memory", "War's Aftermath"],
    background: "Set in post-WWII Venice, the novel follows Colonel Richard Cantwell, a 50-year-old American officer with a heart condition, through his final weekend. He dines, drinks, duck-hunts, and makes love to a young Italian countess, Renata, while reflecting on his experiences in both world wars. The novel was partly inspired by Hemingway's own visit to Venice and his infatuation with 18-year-old Adriana Ivancich. Critics savaged the book upon publication, and many considered Hemingway finished.",
    significance: "Though his least successful novel critically, it served as a crucial emotional and artistic bridge to 'The Old Man and the Sea.' The themes of aging, dignity in the face of death, and the tension between memory and present experience would be refined brilliantly in his next work."
  },
  {
    id: 15,
    title: "The Old Man and the Sea",
    year: 1952,
    type: "novel",
    description: "The magnificent novella of an aging Cuban fisherman's epic battle with a giant marlin, Hemingway's final major work published in his lifetime.",
    themes: ["Endurance", "Grace Under Pressure", "Man vs. Nature", "Aging", "Defeat and Triumph", "Pride", "Humility"],
    background: "First published in its entirety in a single issue of Life magazine (which sold 5.3 million copies in two days), the novella tells the story of Santiago, an old fisherman who has gone 84 days without catching a fish. He ventures far out into the Gulf Stream and hooks an enormous marlin, engaging in a three-day battle that tests every fiber of his being. Though he eventually lashes the marlin to his boat, sharks devour it on the journey home, leaving only the skeleton. Hemingway based Santiago partly on his friend Gregorio Fuentes, a Cuban fisherman.",
    significance: "This novella restored Hemingway's literary reputation after the poor reception of 'Across the River and into the Trees.' It won the Pulitzer Prize for Fiction in 1953 and was specifically cited by the Nobel Committee when Hemingway received the Nobel Prize in Literature in 1954. Santiago's declaration — 'A man can be destroyed but not defeated' — became one of literature's most famous lines."
  },
  {
    id: 16,
    title: "A Moveable Feast",
    year: 1964,
    type: "posthumous",
    description: "A luminous memoir of Hemingway's early years as a struggling young writer in 1920s Paris.",
    themes: ["Memory", "Youth", "Paris", "Literary Life", "Artistic Development", "Nostalgia"],
    background: "Published three years after Hemingway's death, this memoir was compiled from manuscripts he had worked on intermittently during the late 1950s. It recounts his life in Paris from 1921 to 1926 with his first wife Hadley, capturing the cafés, bookshops, and artistic circles of the Left Bank. Portraits of Gertrude Stein, Ezra Pound, F. Scott Fitzgerald, and other luminaries are vivid, sometimes generous, sometimes cruel. The famous opening — 'If you are lucky enough to have lived in Paris as a young man, then wherever you go for the rest of your life, it stays with you, for Paris is a moveable feast' — was taken from a letter to a friend.",
    significance: "Beloved for its lyrical evocation of 1920s Paris and the creative life, the memoir offers invaluable insights into Hemingway's artistic development and the Lost Generation circle. It remains one of the most celebrated memoirs in the English language and has inspired countless writers to seek their own Paris."
  },
  {
    id: 17,
    title: "Islands in the Stream",
    year: 1970,
    type: "posthumous",
    description: "A posthumous novel in three parts following painter Thomas Hudson through his life in Bimini, Cuba, and at sea.",
    themes: ["Loss", "Fatherhood", "Art", "War", "Isolation", "The Sea"],
    background: "Edited and published by Scribner's and Mary Hemingway from manuscripts Hemingway had been working on since the 1940s. The novel follows Thomas Hudson, an American painter living in the Caribbean. 'Bimini' depicts idyllic days with his sons; 'Cuba' shows Hudson drinking and grieving after personal tragedy; 'At Sea' follows his pursuit of German U-boat survivors during WWII. The three sections were intended as parts of a larger 'sea novel' that Hemingway never completed to his satisfaction.",
    significance: "Despite its unfinished quality, the novel contains some of Hemingway's most powerful writing about fatherhood, loss, and the sea. The 'Bimini' section in particular is praised for its vivid depiction of a boy's battle with a swordfish and the tender dynamics between father and sons."
  },
  {
    id: 18,
    title: "The Nick Adams Stories",
    year: 1972,
    type: "posthumous",
    description: "A collected edition of all Nick Adams stories, including eight previously unpublished pieces, arranged in chronological order of Nick's life.",
    themes: ["Coming of Age", "War", "Nature", "Family", "Trauma", "Healing"],
    background: "This collection gathered all stories featuring Hemingway's most autobiographical character, Nick Adams, and arranged them to follow Nick's life from childhood in Michigan through war experiences to fatherhood. Eight previously unpublished stories and fragments were included, filling gaps in Nick's biography. Philip Young edited the volume and argued that the Nick Adams stories formed a coherent, unified narrative of one man's journey through the essential experiences of modern life.",
    significance: "By presenting the Nick Adams stories as a unified narrative, this collection revealed the depth and coherence of Hemingway's most personal fictional creation. Nick Adams remains one of the most important characters in American literature, serving as a template for the modern literary protagonist wrestling with trauma and seeking meaning."
  },
  {
    id: 19,
    title: "The Dangerous Summer",
    year: 1985,
    type: "posthumous",
    description: "A non-fiction account of the 1959 bullfighting season and the rivalry between matadors Antonio Ordóñez and Luis Miguel Dominguín.",
    themes: ["Bullfighting", "Rivalry", "Aging", "Spain", "Art and Death"],
    background: "Commissioned by Life magazine, Hemingway followed the 1959 mano a mano series between his friend Antonio Ordóñez and Luis Miguel Dominguín across Spain. What was intended as a magazine article ballooned into a massive manuscript as Hemingway, in declining mental health, struggled to control the material. Life published a heavily edited three-part excerpt in 1960. The full book was published posthumously in 1985, edited by Michael Pietsch. The journey proved to be Hemingway's last great Spanish adventure.",
    significance: "The book provides a fascinating window into Hemingway's final creative period and his lifelong passion for bullfighting. It also serves as an unintentional portrait of a great writer in decline, struggling to recapture the magic of 'Death in the Afternoon.'"
  },
  {
    id: 20,
    title: "The Garden of Eden",
    year: 1986,
    type: "posthumous",
    description: "A posthumous novel exploring gender, identity, and creativity through the story of a young writer and his wife on their honeymoon.",
    themes: ["Gender Identity", "Sexuality", "Art and Life", "Jealousy", "Creative Process"],
    background: "Hemingway worked on this novel intermittently from 1946 until his death, leaving behind a massive, unfinished manuscript of over 200,000 words. The published version, edited down to about 70,000 words by Tom Jenks, follows young writer David Bourne and his wife Catherine on their honeymoon in the South of France. Catherine's increasingly transgressive experiments with gender and sexuality — including androgynous haircuts and role reversals — create escalating tension, complicated by the arrival of a second woman, Marita.",
    significance: "Startlingly different from Hemingway's public image, this novel revealed his deep engagement with themes of gender fluidity, androgyny, and sexual identity decades before such topics entered mainstream literary discourse. It forced a reassessment of Hemingway as a far more complex and psychologically daring writer than the macho stereotype suggested."
  },
  {
    id: 21,
    title: "True at First Light",
    year: 1999,
    type: "posthumous",
    description: "A fictionalized memoir of Hemingway's 1953-54 African safari, exploring identity, marriage, and the collision of cultures.",
    themes: ["Africa", "Identity", "Marriage", "Cross-Cultural Encounter", "Aging"],
    background: "Based on an enormous manuscript (over 200,000 words) that Hemingway worked on after his second African safari, this book was edited by his son Patrick Hemingway and published nearly four decades after his death. It blends fiction and memoir as Hemingway depicts himself as a temporary game ranger in Kenya during the Mau Mau uprising, exploring his fascination with African culture and his relationship with his fourth wife, Mary. A fuller version was later published as 'Under Kilimanjaro' in 2005.",
    significance: "Though critically divisive, the book offers insights into Hemingway's late creative ambitions and his complex, sometimes troubling engagement with African cultures. The 2005 restored edition provided scholars with a more complete text for understanding his final major creative project."
  },
  {
    id: 22,
    title: "Under Kilimanjaro",
    year: 2005,
    type: "posthumous",
    description: "The restored, complete edition of Hemingway's African manuscript, previously published in abridged form as 'True at First Light.'",
    themes: ["Africa", "Marriage", "Cultural Identity", "Nature", "Spirituality"],
    background: "Edited by Robert W. Lewis and Robert E. Fleming, this volume presented the full text of Hemingway's African manuscript without the heavy editorial cuts of 'True at First Light.' At roughly twice the length, it provides a more nuanced and complete picture of Hemingway's final major creative work, including passages about his psychological struggles and more extensive exploration of African cultural encounters.",
    significance: "The restored text allowed readers and scholars to engage with Hemingway's original vision for the work, revealing an author experimenting with form, identity, and the boundaries between fiction and autobiography in ways that anticipated later literary movements."
  }
];

const CONTEMPORARIES = [
  {
    name: "Gertrude Stein",
    years: "1874–1946",
    relationship: "mentor",
    description: "American expatriate writer and art collector who became Hemingway's first literary mentor in Paris. She coined the term 'Lost Generation' and taught him about rhythm, repetition, and the power of simple language. Their relationship later soured, and Hemingway portrayed her unkindly in 'A Moveable Feast.'",
    works: "Three Lives, The Autobiography of Alice B. Toklas, Tender Buttons"
  },
  {
    name: "Ezra Pound",
    years: "1885–1972",
    relationship: "mentor",
    description: "American poet and critic who served as Hemingway's early editor in Paris, teaching him to cut ruthlessly and distill language to its essence. Pound famously blue-penciled Hemingway's early prose, helping forge the lean style that would define modern American fiction. Hemingway later campaigned for Pound's release from St. Elizabeths Hospital.",
    works: "The Cantos, Hugh Selwyn Mauberley, ABC of Reading"
  },
  {
    name: "F. Scott Fitzgerald",
    years: "1896–1940",
    relationship: "friend",
    description: "Hemingway's most famous literary friendship — and rivalry. Fitzgerald championed Hemingway's early work and introduced him to his editor Maxwell Perkins at Scribner's. Their relationship was complex: Hemingway admired Fitzgerald's talent but was contemptuous of what he saw as his weakness and his wife Zelda's destructive influence. The portrait of Fitzgerald in 'A Moveable Feast' is affectionate but devastating.",
    works: "The Great Gatsby, Tender Is the Night, This Side of Paradise"
  },
  {
    name: "James Joyce",
    years: "1882–1941",
    relationship: "contemporary",
    description: "Irish modernist master whom Hemingway knew in Paris. They shared a publisher (Sylvia Beach) and occasionally drank together at Parisian cafés. Hemingway admired Joyce's work enormously, calling 'Ulysses' a magnificent book, though their styles could hardly have been more different — Joyce's maximalism versus Hemingway's minimalism.",
    works: "Ulysses, Dubliners, A Portrait of the Artist as a Young Man"
  },
  {
    name: "John Dos Passos",
    years: "1896–1970",
    relationship: "friend",
    description: "American novelist who was one of Hemingway's closest friends in the 1920s and 30s. They shared ambulance driver experience in WWI, traveled Spain together, and both wrote about the Spanish Civil War. Their friendship ended bitterly during the war over political disagreements and the mysterious disappearance of Dos Passos's friend José Robles.",
    works: "U.S.A. Trilogy, Manhattan Transfer, Three Soldiers"
  },
  {
    name: "William Faulkner",
    years: "1897–1962",
    relationship: "rival",
    description: "Hemingway's great American rival, the other towering figure of 20th-century American fiction. They represented opposite poles of modernist style — Faulkner's baroque, labyrinthine sentences vs. Hemingway's stripped-down clarity. Faulkner once ranked Hemingway below Thomas Wolfe, saying Hemingway 'had no courage' to risk excess. Hemingway was furious and the feud simmered for years, though both men respected the other's talent.",
    works: "The Sound and the Fury, As I Lay Dying, Absalom, Absalom!"
  },
  {
    name: "Virginia Woolf",
    years: "1882–1941",
    relationship: "contemporary",
    description: "British modernist novelist and essayist who was revolutionizing fiction simultaneously with Hemingway but from a radically different direction. Where Hemingway stripped prose to its bones, Woolf explored the flowing interior life of consciousness. She was skeptical of Hemingway's work, writing that it was 'too self-consciously virile.'",
    works: "Mrs Dalloway, To the Lighthouse, Orlando, A Room of One's Own"
  },
  {
    name: "Sherwood Anderson",
    years: "1876–1941",
    relationship: "mentor",
    description: "American writer whose linked story collection 'Winesburg, Ohio' was an early influence on Hemingway. Anderson gave Hemingway letters of introduction to the Paris literary world, launching his expatriate career. Hemingway repaid this generosity by writing 'The Torrents of Spring,' a cruel parody of Anderson's style, permanently damaging their relationship.",
    works: "Winesburg, Ohio; Poor White; Dark Laughter"
  },
  {
    name: "Ford Madox Ford",
    years: "1873–1939",
    relationship: "contemporary",
    description: "English novelist and editor of the transatlantic review who published some of Hemingway's early work and gave him his first editing job. Ford was a brilliant novelist in his own right, and his masterpiece 'The Good Soldier' influenced Hemingway's approach to unreliable narration and withholding information.",
    works: "The Good Soldier, Parade's End tetralogy"
  },
  {
    name: "Dorothy Parker",
    years: "1893–1967",
    relationship: "friend",
    description: "American poet, writer, and critic known for her sharp wit. She was an early admirer and reviewer of Hemingway's work, and they maintained a long friendship. Parker championed Hemingway's writing in her influential New Yorker reviews and shared his fondness for drinking and verbal sparring.",
    works: "Enough Rope, Big Blonde, Complete Stories"
  },
  {
    name: "T.S. Eliot",
    years: "1888–1965",
    relationship: "contemporary",
    description: "Anglo-American poet whose 'The Waste Land' (1922) defined literary modernism alongside Hemingway's prose innovations. While they moved in overlapping circles in Paris and London, their styles and temperaments differed greatly. Eliot's erudite, allusive poetry and Hemingway's stripped-down prose represented twin pillars of modernist achievement.",
    works: "The Waste Land, Four Quartets, The Love Song of J. Alfred Prufrock"
  },
  {
    name: "Martha Gellhorn",
    years: "1908–1998",
    relationship: "friend",
    description: "War correspondent and novelist who became Hemingway's third wife (1940-1945). One of the greatest war correspondents of the 20th century, she covered conflicts from Spain to Vietnam. Their marriage collapsed partly because Hemingway could not tolerate her independence and ambition. She famously refused to be known as a 'Hemingway wife.'",
    works: "A Stricken Field, The Face of War, Travels with Myself and Another"
  }
];

const WORLD_LITERATURE = [
  // 1890s–1900s
  { year: 1899, text: "<strong>Hemingway born</strong> in Oak Park, Illinois. The same year saw the publication of Joseph Conrad's <em>Heart of Darkness</em>, Kate Chopin's <em>The Awakening</em>, and the first Nobel Prizes announced.", decade: "1890s–1900s" },
  { year: 1900, text: "<strong>Sigmund Freud</strong> publishes <em>The Interpretation of Dreams</em>, revolutionizing understanding of the human psyche — a development that would profoundly influence modernist literature.", decade: "1890s–1900s" },
  { year: 1901, text: "<strong>First Nobel Prize in Literature</strong> awarded to <strong>Sully Prudhomme</strong> (France). Rudyard Kipling's <em>Kim</em> published.", decade: "1890s–1900s" },
  { year: 1902, text: "<strong>Joseph Conrad</strong> publishes <em>Heart of Darkness</em> in book form. Anton Chekhov premieres <em>The Three Sisters</em> in Moscow.", decade: "1890s–1900s" },
  { year: 1904, text: "<strong>Anton Chekhov</strong> dies. His revolutionary approach to the short story and drama — emphasizing mood, subtext, and the unsaid — anticipated Hemingway's iceberg theory.", decade: "1890s–1900s" },

  // 1910s
  { year: 1913, text: "<strong>Marcel Proust</strong> publishes the first volume of <em>In Search of Lost Time</em> (Swann's Way) in France, beginning one of literature's greatest achievements.", decade: "1910s" },
  { year: 1914, text: "<strong>James Joyce</strong> publishes <em>Dubliners</em>, his landmark collection of short stories about Dublin life. World War I begins, the cataclysm that would shape the Lost Generation.", decade: "1910s" },
  { year: 1915, text: "<strong>Franz Kafka</strong> publishes <em>The Metamorphosis</em> in Germany. Virginia Woolf publishes her first novel, <em>The Voyage Out</em>. <strong>Rabindranath Tagore</strong>, the first non-European Nobel laureate (1913), continues influencing world literature.", decade: "1910s" },
  { year: 1916, text: "<strong>The Dada movement</strong> emerges at the Cabaret Voltaire in Zurich, rebelling against the senselessness of war — an artistic revolution paralleling the literary upheavals to come.", decade: "1910s" },
  { year: 1918, text: "<strong>World War I ends.</strong> Hemingway is wounded on the Italian front. The war produces a generation of disillusioned writers: Wilfred Owen, Siegfried Sassoon, and others give voice to the horror of trench warfare. Owen is killed one week before the Armistice.", decade: "1910s" },

  // 1920s
  { year: 1920, text: "<strong>The Harlem Renaissance</strong> begins flourishing in New York, with writers like Langston Hughes, Zora Neale Hurston, and Claude McKay creating a revolutionary African American literary movement.", decade: "1920s" },
  { year: 1922, text: "A watershed year for modernism: <strong>James Joyce</strong> publishes <em>Ulysses</em>, <strong>T.S. Eliot</strong> publishes <em>The Waste Land</em>, and <strong>Virginia Woolf</strong> publishes <em>Jacob's Room</em>. Together, these works transformed the possibilities of literature.", decade: "1920s" },
  { year: 1924, text: "<strong>Thomas Mann</strong> publishes <em>The Magic Mountain</em> in Germany. The Surrealist Manifesto is published by André Breton in Paris.", decade: "1920s" },
  { year: 1925, text: "<strong>F. Scott Fitzgerald</strong> publishes <em>The Great Gatsby</em>. Kafka's <em>The Trial</em> published posthumously. Virginia Woolf publishes <em>Mrs Dalloway</em>. Hemingway publishes <em>In Our Time</em>.", decade: "1920s" },
  { year: 1927, text: "<strong>Virginia Woolf</strong> publishes <em>To the Lighthouse</em>. Hermann Hesse publishes <em>Steppenwolf</em> in Germany.", decade: "1920s" },
  { year: 1928, text: "<strong>D.H. Lawrence</strong> publishes <em>Lady Chatterley's Lover</em> privately in Italy. <strong>W.B. Yeats</strong> publishes <em>The Tower</em>.", decade: "1920s" },
  { year: 1929, text: "<strong>William Faulkner</strong> publishes <em>The Sound and the Fury</em> the same year Hemingway publishes <em>A Farewell to Arms</em> — the two defining voices of American modernism arriving simultaneously. Erich Maria Remarque publishes <em>All Quiet on the Western Front</em> in Germany.", decade: "1920s" },

  // 1930s
  { year: 1930, text: "<strong>Sinclair Lewis</strong> becomes the first American to win the Nobel Prize in Literature. Dashiell Hammett publishes <em>The Maltese Falcon</em>, defining hard-boiled detective fiction.", decade: "1930s" },
  { year: 1932, text: "<strong>Aldous Huxley</strong> publishes <em>Brave New World</em>. Louis-Ferdinand Céline publishes <em>Journey to the End of the Night</em> in France.", decade: "1930s" },
  { year: 1934, text: "<strong>F. Scott Fitzgerald</strong> publishes <em>Tender Is the Night</em>. Henry Miller publishes <em>Tropic of Cancer</em> in Paris (banned in the US until 1961).", decade: "1930s" },
  { year: 1936, text: "<strong>The Spanish Civil War begins</strong>, drawing writers from around the world including Hemingway, George Orwell, and André Malraux. Margaret Mitchell publishes <em>Gone with the Wind</em>.", decade: "1930s" },
  { year: 1937, text: "<strong>John Steinbeck</strong> publishes <em>Of Mice and Men</em>. Zora Neale Hurston publishes <em>Their Eyes Were Watching God</em>. <strong>Pablo Neruda</strong> publishes <em>Spain in the Heart</em>.", decade: "1930s" },
  { year: 1938, text: "<strong>Jean-Paul Sartre</strong> publishes <em>Nausea</em> in France, launching literary existentialism. Samuel Beckett begins writing in French.", decade: "1930s" },
  { year: 1939, text: "<strong>John Steinbeck</strong> publishes <em>The Grapes of Wrath</em>. James Joyce publishes <em>Finnegans Wake</em>. W.B. Yeats and Sigmund Freud die. World War II begins.", decade: "1930s" },

  // 1940s
  { year: 1940, text: "<strong>Richard Wright</strong> publishes <em>Native Son</em>, a landmark of African American literature. Graham Greene publishes <em>The Power and the Glory</em>. F. Scott Fitzgerald dies at age 44.", decade: "1940s" },
  { year: 1942, text: "<strong>Albert Camus</strong> publishes <em>The Stranger</em> in occupied France, a masterpiece of the absurd. Jorge Luis Borges publishes <em>The Garden of Forking Paths</em> in Argentina.", decade: "1940s" },
  { year: 1943, text: "<strong>Antoine de Saint-Exupéry</strong> publishes <em>The Little Prince</em>. T.S. Eliot publishes <em>Four Quartets</em>.", decade: "1940s" },
  { year: 1945, text: "<strong>World War II ends.</strong> George Orwell publishes <em>Animal Farm</em>. Gabriela Mistral (Chile) wins the Nobel Prize — the first Latin American laureate.", decade: "1940s" },
  { year: 1947, text: "<strong>The Diary of Anne Frank</strong> published in the Netherlands. Malcolm Lowry publishes <em>Under the Volcano</em>. Albert Camus publishes <em>The Plague</em>.", decade: "1940s" },
  { year: 1948, text: "<strong>T.S. Eliot</strong> wins the Nobel Prize in Literature. Alan Paton publishes <em>Cry, the Beloved Country</em> (South Africa). The State of Israel is established, transforming Hebrew literature.", decade: "1940s" },
  { year: 1949, text: "<strong>Simone de Beauvoir</strong> publishes <em>The Second Sex</em> in France. George Orwell publishes <em>1984</em>. William Faulkner wins the Nobel Prize.", decade: "1940s" },

  // 1950s
  { year: 1951, text: "<strong>J.D. Salinger</strong> publishes <em>The Catcher in the Rye</em>. Samuel Beckett publishes <em>Molloy</em> in French. <strong>Yasunari Kawabata</strong> continues his influential work in Japan.", decade: "1950s" },
  { year: 1952, text: "<strong>Hemingway publishes <em>The Old Man and the Sea</em></strong>. Ralph Ellison publishes <em>Invisible Man</em>. Samuel Beckett's <em>Waiting for Godot</em> premieres in Paris.", decade: "1950s" },
  { year: 1953, text: "<strong>Hemingway wins the Pulitzer Prize</strong> for <em>The Old Man and the Sea</em>. Winston Churchill wins the Nobel Prize in Literature. James Baldwin publishes <em>Go Tell It on the Mountain</em>.", decade: "1950s" },
  { year: 1954, text: "<strong>Hemingway wins the Nobel Prize in Literature.</strong> Survives two plane crashes in Africa. William Golding publishes <em>Lord of the Flies</em>. Françoise Sagan publishes <em>Bonjour Tristesse</em> at age 18.", decade: "1950s" },
  { year: 1955, text: "<strong>The Beat Generation</strong> emerges — Allen Ginsberg reads 'Howl' at the Six Gallery in San Francisco. Vladimir Nabokov publishes <em>Lolita</em> in Paris. Juan Rulfo publishes <em>Pedro Páramo</em> in Mexico.", decade: "1950s" },
  { year: 1957, text: "<strong>Jack Kerouac</strong> publishes <em>On the Road</em>. Albert Camus wins the Nobel Prize. Boris Pasternak completes <em>Doctor Zhivago</em>, smuggled out of the Soviet Union.", decade: "1950s" },
  { year: 1958, text: "<strong>Chinua Achebe</strong> publishes <em>Things Fall Apart</em> (Nigeria), a landmark of African and world literature. Boris Pasternak wins the Nobel Prize but is forced by Soviet authorities to decline it.", decade: "1950s" },
  { year: 1959, text: "<strong>William S. Burroughs</strong> publishes <em>Naked Lunch</em> in Paris. Günter Grass publishes <em>The Tin Drum</em> in Germany.", decade: "1950s" },

  // 1960s (until Hemingway's death)
  { year: 1960, text: "<strong>Harper Lee</strong> publishes <em>To Kill a Mockingbird</em>. <strong>Saint-John Perse</strong> (France) wins the Nobel Prize in Literature.", decade: "1960–1961" },
  { year: 1961, text: "<strong>Ernest Hemingway dies on July 2 in Ketchum, Idaho.</strong> Joseph Heller publishes <em>Catch-22</em>. V.S. Naipaul publishes <em>A House for Mr Biswas</em>. The literary world he helped create continues to evolve through new voices and new movements around the globe.", decade: "1960–1961" }
];
