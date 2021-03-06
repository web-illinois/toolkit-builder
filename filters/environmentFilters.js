module.exports = class EnvironmentFilters {
  static buildPostCode(name, environments) {
    let returnValue = '';
    environments.forEach(environment => {
      if (environment.name === name) {
        returnValue = environment.externalCodePost.replace(/</gi, '&lt;').replace(/>/gi, '&gt;<br>');
      }
    });
    return returnValue;
  }

  static buildPreCode(name, environments) {
    let returnValue = '';
    environments.forEach(environment => {
      if (environment.name === name) {
        returnValue = environment.externalCodePre.replace(/</gi, '&lt;').replace(/>/gi, '&gt;<br>');
      }
    });
    return returnValue;
  }

  static buildHeader(name, environments) {
    let returnValue = '';
    environments.forEach(environment => {
      if (environment.name === name) {
        returnValue = `
            &lt;meta charset="UTF-8"&gt;<br>
            &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;<br>
            &lt;link rel="dns-prefetch" href="https:${environment.prefetch}"&gt;<br>
            &lt;link rel="icon" href="https://cdn.brand.illinois.edu/favicon.ico"&gt;<br>
            &lt;link rel="stylesheet" href="https:${environment.path}/toolkit.css" media="all"&gt;<br>
            &lt;script src="https:${environment.path}/toolkit.js"&gt;&lt;/script&gt;
            `;
      }
    });
    return returnValue;
  }
}