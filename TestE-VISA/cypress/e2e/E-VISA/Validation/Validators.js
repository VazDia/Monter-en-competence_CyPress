export class Validators {
    
    textValidator(text){
        const regrexExpression = /^[A-Za-z]+$/
        return regrexExpression.test(text)
    }
    emailValidator(email){
        const regrexExpression = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9+-]+\.[a-zA-Z]{2,}$/
        return regrexExpression.test(email)
    }

    passwordValidator(password){
        const regrexExpression = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
        return regrexExpression.test(password)
    }
}