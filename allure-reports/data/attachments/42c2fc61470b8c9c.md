# Page snapshot

```yaml
- textbox "Username": standard_user
- textbox "Password": secret
- button "LOGIN"
- 'heading "Epic sadface: Username and password do not match any user in this service" [level=3]':
  - button
  - text: "Epic sadface: Username and password do not match any user in this service"
- img
- heading "Accepted usernames are:" [level=4]
- text: standard_user locked_out_user problem_user performance_glitch_user
- heading "Password for all users:" [level=4]
- text: secret_sauce
```