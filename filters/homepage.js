module.exports = class Homepage {
    static build(name, environmentList) {
        environmentList.sort((a, b) => a.order == b.order ? (a.name > b.name ? 1 : -1) : (a.order > b.order ? 1 : -1));
        let returnValue = '<h2>Environment List</h2>';
        environmentList.forEach(envList => {
            returnValue += `<h3>${envList.name}</h3><p>${envList.description}</p><ul>`;
            envList.environments.forEach(env => {
                returnValue += `<li><a href="https://builder.jonker.web.illinois.edu/${env.slug}">${env.name}</a>`;
                if (env.notes === '') {
                    returnValue += `</li>`;
                } else {
                    returnValue += `: ${env.notes}</li>`;
                }
            });
            returnValue += '</ul>';
        });
        return returnValue;
    }
}