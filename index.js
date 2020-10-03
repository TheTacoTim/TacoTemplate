const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const PREFIX = config.prefix;
const token = config.token;



client.once('ready', () => {
	//client.user.setActivity('WHAT EVER ACTIVITY YOU WANT', { type: 'PLAYING' });
	//You can uncomment the above line to set a custom status for the bot.
});

//Whenever there is a message sent, do the thing.
client.on('message', async message => {
	//if the message is coming from a bot, prevent any further commands.
	if(message.author.bot) return;
	
//if the message contains our prefix, do thing.	 
if (message.content.startsWith(PREFIX)) {
		
		
		
	//This is an argument parser, it will read the message, remove the prefix, and split each word and label it with an argument number.	
	const withoutPrefix = message.content.slice(config.prefix.length);
	const split = withoutPrefix.split(/ +/);
	const command = split[0];
	//For Future additions, args[0] would be the command. /help 3 would be parsed out as "/" <-- prefix, "help" <-- args[0] "3" <-- args[1] and so on.
	const args = split.slice(1);
	
	//if it doesn't have the prefix, stop reading code.
	if(!message.content.startsWith(config.prefix)) return;
	//allows for members to be mentioned in future commands.
	const mention = message.mentions.members.first();
	
 
 
//This Block will prevent anything from running if the command that is sent, does not match a command in our command list (the switch line found below)
 if(!command) {
	return
}
//End Block
else {
	//This compares args[0] (the command) and compares it to the list. Then will execute the code based on if it matches exactly
switch(command) {

	
	
	//Use this format for new commands. Each Command needs to start with case "Command Name": and needs to end with "break;"
	case "hello":
	//message.channel.send is used to send a message to the channel that the command was used in
	message.channel.send("Hello! I am working!")
	break;
	//End example formatting.
	
	
	case "latency":
		// Calculates ping between sending a message and editing it, giving a nice round-trip latency.
		// The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
		const m = await message.channel.send("latency");
		m.edit(`Latency is ${m.createdTimestamp - message.createdTimestamp}ms.`);
	break;
	
}};


	
	//logs in to the bot using your token. Please do not touch this, the Bot's token should be defined in the config.json file
client.login(token);

