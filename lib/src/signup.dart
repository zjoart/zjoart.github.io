import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'customfield.dart';
import 'widgets.dart';

class SignUpPage extends StatelessWidget {
  SignUpPage({Key? key}) : super(key: key);

  final TextEditingController _firstname = TextEditingController();
  final TextEditingController _lastname = TextEditingController();
  final TextEditingController _email = TextEditingController();
  final TextEditingController _password = TextEditingController();
  final TextEditingController _reneterpassword = TextEditingController();

  final bool checkedValue = false;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Background(
        child: Column(
          children: [
            const Logo(),
            //  SizedBox(height: 45),
            SignupField(
                firstname: _firstname,
                lastname: _lastname,
                password: _password,
                reneterpassword: _reneterpassword,
                email: _email),
            Column(mainAxisAlignment: MainAxisAlignment.center, children: [
              GestureDetector(
                onTap: () {
                  debugPrint("Tapped to homepage");
                  Navigator.pushNamed(context, 'login');
                },
                child: const ButtonWidget(text: "Sign Up"),
              ),
              const SizedBox(height: 25),
              RichText(
                  text: TextSpan(
                      text: "Already have an account?",
                      style: const TextStyle(color: Colors.white),
                      children: [
                    TextSpan(
                      text: " Login",
                      style: TextStyle(color: Colors.orange.shade900),
                      recognizer: TapGestureRecognizer()
                        ..onTap = () {
                          debugPrint("Tapped to signup");
                          Navigator.pushNamed(context, 'login');
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

class SignupField extends StatelessWidget {
  const SignupField({
    Key? key,
    required TextEditingController firstname,
    required TextEditingController lastname,
    required TextEditingController password,
    required TextEditingController reneterpassword,
    required TextEditingController email,
  })  : _firstname = firstname,
        _lastname = lastname,
        _password = password,
        _reneterpassword = reneterpassword,
        _email = email,
        super(key: key);

  final TextEditingController _firstname;
  final TextEditingController _lastname;
  final TextEditingController _password;
  final TextEditingController _reneterpassword;
  final TextEditingController _email;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text("Sign up",
                style: TextStyle(
                    fontSize: 25,
                    color: Colors.orange.shade900,
                    fontWeight: FontWeight.w600)),
            const SizedBox(height: 40),
            FieldRow(firstname: _firstname, lastname: _lastname),
            FieldRow(firstname: _password, lastname: _reneterpassword),
            SizedBox(
              width: MediaQuery.of(context).size.width / 1.9,
              child: CustomField(
                  head: "",
                  text: _email,
                  hint: "Email address",
                  type: TextInputType.text),
            ),
            const SizedBox(height: 10),
            //CheckBoxButton(),
            RichText(
                text: TextSpan(
                    text: "Accept",
                    style: const TextStyle(
                        color: Colors.white, fontWeight: FontWeight.w500),
                    children: [
                  TextSpan(
                    text: " Terms",
                    style: TextStyle(color: Colors.orange.shade900),
                    recognizer: TapGestureRecognizer()
                      ..onTap = () {
                        debugPrint("Tapped to signup");
                        Navigator.pushNamed(context, 'login');
                      },
                  ),
                  const TextSpan(
                    text: " and",
                    style: TextStyle(color: Colors.white),
                  ),
                  TextSpan(
                    text: " Conditions",
                    style: TextStyle(color: Colors.orange.shade900),
                    recognizer: TapGestureRecognizer()
                      ..onTap = () {
                        debugPrint("Tapped to signup");
                        Navigator.pushNamed(context, 'signup');
                      },
                  )
                ])),
            const SizedBox(height: 30),
          ],
        ),
      ],
    );
  }
}

// FieldRow(firstname: _firstname, lastname: _lastname)
