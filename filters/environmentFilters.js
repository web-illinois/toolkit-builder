module.exports = class EnvironmentFilters {
  static buildPostCode(name, environments) {
    let returnValue = '';
    environments.forEach(environment => {
      if (environment.name === name) {
        if (environment.externalCodePost === null || environment.externalCodePost === '') {
          returnValue = '<em>no code has been added</em>';
        } else {
          returnValue = environment.externalCodePost.replace(/</gi, '&lt;').replace(/>/gi, '&gt;<br>');
        }
      }
    });
    return returnValue;
  }

  static buildPreCode(name, environments) {
    let returnValue = '';
    environments.forEach(environment => {
      if (environment.name === name) {
        if (environment.externalCodePre === null || environment.externalCodePre === '') {
          returnValue = '<em>no code has been added</em>';
        } else {
          returnValue = environment.externalCodePre.replace(/</gi, '&lt;').replace(/>/gi, '&gt;<br>');
        }
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
            &lt;link rel="dns-prefetch" href="${environment.prefetch}"&gt;<br>
            &lt;link rel="icon" href="https://cdn.brand.illinois.edu/favicon.ico"&gt;<br>
            &lt;link rel="stylesheet" href="${environment.path}/toolkit.css" media="all"&gt;<br>
            &lt;script src="${environment.path}/toolkit.js"&gt;&lt;/script&gt;
            `;
      }
    });
    return returnValue;
  }
}