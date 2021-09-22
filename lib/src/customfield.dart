import 'package:flutter/material.dart';

class CustomField extends StatelessWidget {
const  CustomField({
    Key? key,
    required this.head,
    required this.text,
    required this.hint,
    required this.type,
  }) : super(key: key);

  final String head;
  final TextEditingController text;
  final String hint;
  final TextInputType type;
  final nstyle = const TextStyle(color: Color(0xFF262F3A));
  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          head,
          style: nstyle.copyWith(fontSize: 17, fontWeight: FontWeight.w600),
        ),
       const SizedBox(height: 15),
        TextFormField(
          controller: text,
          validator: (value) {
            if (value != null) {
              return null;
            }
            return 'Please enter an input';
          },
          keyboardType: type,
          autofocus: false,
          decoration: InputDecoration(
              labelText: hint,
              filled: true,
              fillColor: Colors.white,
              contentPadding: const EdgeInsets.fromLTRB(20.0, 7.0, 20.0, 7.0),
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8.0),
              )),
          style: nstyle,
        ),
      ],
    );
  }
}
