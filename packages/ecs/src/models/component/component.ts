import { uuid } from '../../utilities';

/**
 * The ECS Component class.
 *
 * @beta
 */
export default abstract class Component {
  /**
   * The ID of this Component.
   */
  public readonly id: string;

  /**
   * The type of this Component.
   */
  public readonly type: string;

  /**
   * Construct a new Component.
   */
  public constructor() {
    this.id = uuid();
    this.type = this.constructor.name;
  }
}
