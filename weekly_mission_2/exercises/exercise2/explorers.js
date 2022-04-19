const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

console.log("1. [ForEach] to show every explorer's name")
explorers.forEach(explorer => {
    console.log(explorer.name)
});

console.log('\n')

console.log("2. [ForEach] to show every explorer's stack")
explorers.forEach(explorer => {
  console.log(explorer.name + ": " + explorer.stack)
});

console.log('\n')
console.log("3. [Map] to create a new list with every explorer's stack")
stacks = explorers.map(explorer => explorer.stack)
console.log(stacks)

console.log('\n')
console.log("4. [Filter] to get a list of explorers whose stack contains 'js'")
explorers_with_js = explorers.filter(explorer => {
  if (explorer.stack.includes('js')) {
    return explorer
  }
})
console.log(explorers_with_js)

console.log('\n')
console.log("5. [Find] to find the first explorer from CDMX")
first_explorer_from_cdmx = explorers.find(ex => ex.city === "CDMX")
console.log(">> " + first_explorer_from_cdmx)

console.log('\n')
console.log("6. [Reduce] to get the sum of all exercises completed")
total_exercises_completed = explorers.reduce(
  (acc, explorer) => acc + explorer.exercises_completed, 0
)
console.log(">> " + total_exercises_completed)

console.log('\n')
console.log("7. [Some] to know if at least one of the explorers has True in missions.frontend.exercisesFinished")
atLeastOne = explorers.some(explorer => explorer.missions.frontend.exercisesFinished)
console.log(">> " + atLeastOne)

console.log('\n')
console.log("8. [Every] to know if all of the explorers have True in missions.onboarding.isFinished")
everyExplorer = explorers.every(explorer => explorer.missions.onboarding.isFinished)
console.log(">> " + everyExplorer)