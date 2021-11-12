let versionGlob_stage3 = ''
let versionGlob_dev3 = ''
let versionGlob_openbeta = ''

// eCommerce ////////

const checkVersionStage3 = () => {
    let isSame = true

    return new Promise((resolve, reject) => {
        fetch('https://stage3.sacret-life.com/').then(res => res.text()).then(res => {
            document.querySelector('.ecom-div').innerHTML = res
    
            let version = document.querySelector('.page-footer .copyright .content p').innerText
            console.log(version)   
    
            if (versionGlob_stage3 !== '') {
                if (versionGlob_stage3 !== version) isSame = false
            }
    
            versionGlob_stage3 = version
    
            resolve(isSame)
        })
    })
}

// eCommerce // DEV

const checkVersionDev3 = () => {
    let isSame = true

    return new Promise((resolve, reject) => {
        fetch('https://dev3.sacret-life.com/').then(res => res.text()).then(res => {
            document.querySelector('.ecom-div').innerHTML = res
    
            let version = document.querySelector('.page-footer .copyright .content p').innerText
            console.log(version)   
    
            if (versionGlob_dev3 !== '') {
                if (versionGlob_dev3 !== version) isSame = false
            }
    
            versionGlob_dev3 = version
    
            resolve(isSame)
        })
    })
}

// eCommerce // OPEN BETA

const checkVersionOpenbeta = () => {
    let isSame = true

    return new Promise((resolve, reject) => {
        fetch('https://open-beta.sacret-life.com/').then(res => res.text()).then(res => {
            document.querySelector('.ecom-div').innerHTML = res
    
            let version = document.querySelector('.page-footer .copyright .content p').innerText
            console.log(version)   
    
            if (versionGlob_openbeta !== '') {
                if (versionGlob_openbeta !== version) isSame = false
            }
    
            versionGlob_openbeta = version
    
            resolve(isSame)
        })
    })
}

// eCommerce // OPEN BETA

const checkOpenbeta = () => {
    checkVersionOpenbeta()
    setInterval(async () => {
        let isSame = await checkVersionOpenbeta()
    
        if (!isSame) {
            fetch('https://discord.com/api/webhooks/904032788104241212/yJjJLcxg8mQ1OGpR_nR4FGGvOI4OIT9VOSCMjNRHpKXj50i17-cwjTOHgSbCfd3aQA0i', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({content: `[open-beta] Ecommerce version chaged\nCurrent version: ${versionGlob_openbeta}`})
            })
        }
    }, 60000)
}

// eCommerce // DEV

const checkDev3 = () => {
    checkVersionDev3()
    setInterval(async () => {
        let isSame = await checkVersionDev3()
    
        if (!isSame) {
            fetch('https://discord.com/api/webhooks/904032788104241212/yJjJLcxg8mQ1OGpR_nR4FGGvOI4OIT9VOSCMjNRHpKXj50i17-cwjTOHgSbCfd3aQA0i', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({content: `[dev3] Ecommerce version chaged\nCurrent version: ${versionGlob_dev3}`})
            })
        }
    }, 60000)
}

// eCommerce // STAGE

const checkStage3 = () => {
    checkVersionStage3()
    setInterval(async () => {
        let isSame = await checkVersionStage3()
    
        if (!isSame) {
            fetch('https://discord.com/api/webhooks/904032788104241212/yJjJLcxg8mQ1OGpR_nR4FGGvOI4OIT9VOSCMjNRHpKXj50i17-cwjTOHgSbCfd3aQA0i', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({content: `[stage3] Ecommerce version chaged\nCurrent version: ${versionGlob_stage3}`})
            })
        }
    }, 60000)
}

 checkOpenbeta()
 checkDev3()
 checkStage3()
 