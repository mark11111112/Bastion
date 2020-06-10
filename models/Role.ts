/*!
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @copyright 2020 - The Bastion Bot Project
 */

import * as mongoose from "mongoose";

export interface Role {
    _id: string;
    id?: string;
    guild: string;
    emoji?: string;
    selfAssignable?: boolean;
    autoAssignable?: {
        forBots: boolean;
        forUsers: boolean;
    };
    level?: number;
    price?: number;
    blacklisted?: boolean;
    disabledCommands?: string[];
}

export default mongoose.model<Role & mongoose.Document>("Role", new mongoose.Schema<Role>({
    _id: {
        type: String,
        required: true,
    },
    guild: {
        type: String,
        required: true,
        ref: "Guild",
    },
    emoji: {
        type: String,
    },
    selfAssignable: {
        type: Boolean,
    },
    autoAssignable: {
        type: {
            forBots: {
                type: Boolean,
            },
            forUsers: {
                type: Boolean,
            },
        },
    },
    level: {
        type: Number,
    },
    price: {
        type: Number,
    },
    blacklisted: {
        type: Boolean,
    },
    disabledCommands: {
        type: [ String ],
    },
}));