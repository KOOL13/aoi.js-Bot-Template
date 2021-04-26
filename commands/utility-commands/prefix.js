module.exports = {
  name: 'prefix',
  aliases: ['setprefix', 'set-prefix']
  code: `$setServerVar[prefix;$message]
Prefix has been set to: \`$message\`
$onlyIf[$message!=;Current prefix is: \`$getServerVar[prefix]\`.
To change the prefix, do \`$getServerVar[prefix]prefix <prefix>\`]
$onlyPerms[admin;You don't have permission to do that!]
`
}
