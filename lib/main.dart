import 'package:flutter/material.dart';

import 'home.dart';
import 'src/login.dart';
import 'src/signup.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);


  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
        initialRoute: 'login',
        routes: {
          'home': (context) => const HomeView(),
          'login': (context) =>  LoginPage(),
          'signup': (context) => SignUpPage()
        }
    );
  }
}
