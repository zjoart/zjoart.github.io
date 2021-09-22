import 'package:flutter/material.dart';
import 'customfield.dart';
import 'asset.dart';

class Logo extends StatelessWidget {
  const Logo({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 30),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
              width: 150,
              child: Image.asset(
                logo,
              )),
        ],
      ),
    );
  }
}

class CheckBoxButton extends StatefulWidget {
  const CheckBoxButton({Key? key}) : super(key: key);

  @override
  _CheckBoxButtonState createState() => _CheckBoxButtonState();
}

class _CheckBoxButtonState extends State<CheckBoxButton> {
  bool checkedValue = false;
  @override
  Widget build(BuildContext context) {
    return CheckboxListTile(
      title: const Text("title text"),
      value: checkedValue,
      onChanged: (newValue) {
        setState(() {
          checkedValue = newValue!;
        });
      },
      controlAffinity: ListTileControlAffinity.leading, //  <-- leading Checkbox
    );
  }
}

class ButtonWidget extends StatelessWidget {
  const ButtonWidget({Key? key, required this.text}) : super(key: key);
  final String text;
  @override
  Widget build(BuildContext context) {
    return Container(
        width: MediaQuery.of(context).size.width / 3.5,
        height: 45,
        decoration: BoxDecoration(
            color: Colors.orange.shade900,
            borderRadius: BorderRadius.circular(5)),
        alignment: Alignment.center,
        child: Text(
          text,
          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700),
        ));
  }
}

class Background extends StatelessWidget {
  const Background({Key? key, required this.child}) : super(key: key);
  final Widget child;
  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width,
      height: MediaQuery.of(context).size.height,
      decoration: BoxDecoration(
        image: DecorationImage(
          image: AssetImage(background),
          fit: BoxFit.fill,
          alignment: Alignment.center,
        ),
      ),
      child: Container(color: Colors.black.withOpacity(0.8), child: child),
    );
  }
}

class FieldRow extends StatelessWidget {
  const FieldRow({
    Key? key,
    required TextEditingController firstname,
    required TextEditingController lastname,
  })  : _firstname = firstname,
        _lastname = lastname,
        super(key: key);

  final TextEditingController _firstname;
  final TextEditingController _lastname;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
        // crossAxisAlignment: CrossAxisAlignment.center,
        //mainAxisAlignment: MainAxisAlignment.start,
        children: [
          SizedBox(
              width: MediaQuery.of(context).size.width / 4,
              child: CustomField(
                  head: "",
                  text: _firstname,
                  hint: "First name",
                  type: TextInputType.name)),
          SizedBox(
            width: MediaQuery.of(context).size.width / 30,
          ),
          SizedBox(
              width: MediaQuery.of(context).size.width / 4,
              child: CustomField(
                  head: "",
                  text: _lastname,
                  hint: "Last name",
                  type: TextInputType.name)),
        ],
      ),
    );
  }
}
