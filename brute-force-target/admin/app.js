        // Variável de usuário e senha para fins de demonstração
        const validUsername = "007";
        const validPassword = "yyax";

        document.getElementById("login-button").addEventListener("click", function () {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === validUsername && password === validPassword) {
                // Exibir o alerta de sucesso
                document.getElementById("success-alert").style.display = "block";

                // Redirecionar para dashboard.html após 2 segundos
                setTimeout(function () {
                    window.location.href = "dashboard/index.html";
                }, 2000);
            } else {
                // Exibir o alerta de erro
                document.getElementById("error-alert").style.display = "block";

                // Esconder o alerta de erro após 2 segundos
                setTimeout(function () {
                    document.getElementById("error-alert").style.display = "none";
                }, 2000);
            }
        });