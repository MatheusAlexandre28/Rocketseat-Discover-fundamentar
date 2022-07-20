// # Composição de funções
// - Um encadeamento de funções
// - Uma função que retorna um dado e vai pra outra função, que retorna um dado e vai pra outra função, que retorna...

const people = ['rafa', 'Dieago', 'Dani', 'rod']
const upperCasePeopleThatStartsWithD = people
                                      .filter(person => person.startsWith('D'))
                                      .map(dperson => dperson.toUpperCase())