export default function validateForm(formData) {
    const errors = [];

    if (!formData.get('name')) {
        errors.push('Full Name is required.');
    }

    const email = formData.get('email');
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        errors.push('Valid E-Mail Address is required.');
    }

    if (!formData.get('street')) {
        errors.push('Street is required.');
    }

    const postal = formData.get('postal');
    if (!postal || !/^\d+$/.test(postal)) {
        errors.push('Postal Code must contain only numbers.');
    }

    if (!formData.get('city')) {
        errors.push('City is required.');
    }

    return errors;
}
