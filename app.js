const heroSpan = document.querySelector("#hero")
const villainSpan = document.querySelector("#villain")
const resultSpan = document.querySelector("#result")
const launcherBtn = document.querySelector("button")

const heroes = ["Harry Potter", "Luke Skywalker", "Lara Croft", "Superman", "Garfield"]
const villains = ["Lord Voldemort", "Darth Vader", "Saruman", "Joker", "Cruella"]
const weapon = ["plastic fork", "banana peel", "flip-flop", "picaxe", "dirt block"]

launcherBtn.addEventListener("click", () => {
    const randomHeroIndex = Math.floor(Math.random() * heroes.length)
    const randomHero = heroes[randomHeroIndex]
    const randomHeroWeaponIndex = Math.floor(Math.random() * weapon.length)
    const randomHeroWeapon = weapon[randomHeroWeaponIndex]

    const randomVillainIndex = Math.floor(Math.random() * villains.length)
    const randomVillain = villains[randomVillainIndex]
    const randomVillainWeaponIndex = Math.floor(Math.random() * weapon.length)
    const randomVillainWeapon = weapon[randomVillainWeaponIndex]

    heroSpan.innerHTML = `${randomHero} is armed with a ${randomHeroWeapon}`
    villainSpan.innerHTML = `${randomVillain} is armed with a ${randomVillainWeapon}`

    const heroStrike = randomHero.length + randomHeroWeapon.length
    const villainStrike = randomVillain.length + randomVillainWeapon.length

    console.log(`${randomHero} hit ${heroStrike}`)
    console.log(`${randomVillain} hit ${villainStrike}`)

    let resultMessage = ""

    if(heroStrike === villainStrike) {
        resultMessage = `It's a draw` 
    } else if  (heroStrike > villainStrike) {
        resultMessage = `${randomHero} defeats ${randomVillain} and saves the day!`
    } else {
        resultMessage = `${randomHero} is slain by ${randomVillain} The Dark side wins!`
    }

    resultSpan.innerHTML = resultMessage

})