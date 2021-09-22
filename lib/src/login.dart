import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'customfield.dart';
import 'widgets.dart';

class LoginPage extends StatelessWidget {
  LoginPage({Key? key}) : super(key: key);

  final TextEditingController _email = TextEditingController();
  final TextEditingController _password = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Background(
        child: Column(
          children: [
            const Logo(),
            const SizedBox(height: 50),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text("Login",
                    style: TextStyle(
                        fontSize: 25,
                        color: Colors.orange.shade900,
                        fontWeight: FontWeight.w600)),
                const SizedBox(height: 40),
                SizedBox(
                  width: MediaQuery.of(context).size.width / 2,
                  child: CustomField(
                      head: "",
                      text: _email,
                      hint: "Enter email here",
                      type: TextInputType.emailAddress),
                ),
                SizedBox(
                  width: MediaQuery.of(context).size.width / 2,
                  child: CustomField(
                      head: "",
                      text: _password,
                      hint: "********",
                      type: TextInputType.text),
                ),
                const SizedBox(height: 10),
                Text("Forgot password?",
                    style: TextStyle(color: Colors.orange.shade900)),
                const SizedBox(height: 20),
              ],
            ),
            Column(mainAxisAlignment: MainAxisAlignment.center, children: [
              GestureDetector(
                onTap: () {
                  debugPrint("Tapped to homepage");
                  Navigator.pushNamed(context, 'home');
                },
                child: const ButtonWidget(text: "Login"),
              ),
              const SizedBox(height: 25),
              RichText(
                  text: TextSpan(
                      text: "Don't have an account?",
                      style: const TextStyle(color: Colors.white),
                      children: [
                    TextSpan(
                      text: " Sign up",
                      style: TextStyle(color: Colors.orange.shade900),
                      recognizer: TapGestureRecognizer()
                        ..onTap = () {
                          debugPrint("Tapped to signup");
                          Navigator.pushNamed(context, 'signup');
                        },
                    )
                  ])),
            ])
          ],
        ),
      ),
    );
  }
}
