export default function validateDate(date: Date): Date {
    if(date) {
        if(new Date(date) < new Date()) {
            throw new Error('Date cannot be in the past')
        }
        return new Date(date)
    }
}